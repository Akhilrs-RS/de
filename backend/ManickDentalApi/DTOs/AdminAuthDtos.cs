using System.ComponentModel.DataAnnotations;

namespace ManickDentalApi.DTOs
{
    public class AdminLoginDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required]
        public string Password { get; set; } = string.Empty;
    }

    public class ForgotPasswordRequestDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
    }

    public class ResetPasswordDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;

        public string? ResetCode { get; set; }
        public string? Code { get; set; }

        public string EffectiveCode => !string.IsNullOrWhiteSpace(ResetCode) ? ResetCode : (Code ?? string.Empty);

        [Required]
        [MinLength(6)]
        public string NewPassword { get; set; } = string.Empty;
    }

    public class AdminAuthResponseDto
    {
        public bool Success { get; set; }
        public string Message { get; set; } = string.Empty;
        public string? Token { get; set; }
        public string? Username { get; set; }
        public string? Email { get; set; }
    }
}
