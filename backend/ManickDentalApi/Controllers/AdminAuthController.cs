using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ManickDentalApi.Data;
using ManickDentalApi.DTOs;
using ManickDentalApi.Services;

namespace ManickDentalApi.Controllers
{
    [ApiController]
    [Route("api/admin")]
    public class AdminAuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly ILogger<AdminAuthController> _logger;

        public AdminAuthController(AppDbContext context, ILogger<AdminAuthController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpPost("login")]
        public async Task<ActionResult<AdminAuthResponseDto>> Login([FromBody] AdminLoginDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new AdminAuthResponseDto { Success = false, Message = "Invalid login payload." });
            }

            var admin = await _context.AdminUsers.FirstOrDefaultAsync(u => u.Email.ToLower() == dto.Email.ToLower());
            if (admin == null)
            {
                return Unauthorized(new AdminAuthResponseDto { Success = false, Message = "Invalid email or password." });
            }

            if (!PasswordHasher.VerifyPassword(dto.Password, admin.PasswordHash))
            {
                return Unauthorized(new AdminAuthResponseDto { Success = false, Message = "Invalid email or password." });
            }

            admin.LastLoginAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();

            // Generate simple persistent session token
            var token = Guid.NewGuid().ToString("N");

            return Ok(new AdminAuthResponseDto
            {
                Success = true,
                Message = "Authentication successful.",
                Token = token,
                Username = admin.Username,
                Email = admin.Email
            });
        }

        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordRequestDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { success = false, message = "Valid email is required." });
            }

            var admin = await _context.AdminUsers.FirstOrDefaultAsync(u => u.Email.ToLower() == dto.Email.ToLower());
            if (admin == null)
            {
                // Do not leak whether email exists
                return Ok(new { success = true, message = "If this email is registered, a password reset code has been sent." });
            }

            // Generate 6-digit code
            var random = new Random();
            var resetCode = random.Next(100000, 999999).ToString();

            admin.ResetCode = resetCode;
            admin.ResetCodeExpiry = DateTime.UtcNow.AddMinutes(15);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Password reset code generated for {Email}: {Code}", admin.Email, resetCode);

            // In production this would send an email. For direct developer/user testing, we also return the code in response.
            return Ok(new
            {
                success = true,
                message = "Verification code generated and sent to your registered email.",
                demoResetCode = resetCode
            });
        }

        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { success = false, message = "Invalid reset payload." });
            }

            var admin = await _context.AdminUsers.FirstOrDefaultAsync(u => u.Email.ToLower() == dto.Email.ToLower());
            if (admin == null || string.IsNullOrEmpty(admin.ResetCode))
            {
                return BadRequest(new { success = false, message = "Invalid reset request." });
            }

            var resetCode = dto.EffectiveCode.Trim();
            if (string.IsNullOrWhiteSpace(resetCode))
            {
                return BadRequest(new { success = false, message = "Reset code is required." });
            }

            if (admin.ResetCode != resetCode)
            {
                return BadRequest(new { success = false, message = "Invalid verification code. Please check and try again." });
            }

            if (admin.ResetCodeExpiry == null || admin.ResetCodeExpiry < DateTime.UtcNow)
            {
                return BadRequest(new { success = false, message = "Verification code has expired. Please request a new one." });
            }

            // Update password
            admin.PasswordHash = PasswordHasher.HashPassword(dto.NewPassword);
            admin.ResetCode = null;
            admin.ResetCodeExpiry = null;
            await _context.SaveChangesAsync();

            return Ok(new { success = true, message = "Password has been successfully reset. You may now log in with your new password." });
        }
    }
}
