using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ManickDentalApi.Data;
using ManickDentalApi.DTOs;
using ManickDentalApi.Models;

namespace ManickDentalApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ContactController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/contact
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactMessage>>> GetMessages()
        {
            var messages = await _context.ContactMessages
                .OrderByDescending(m => m.CreatedAt)
                .ToListAsync();
            return Ok(messages);
        }

        // POST: api/contact
        [HttpPost]
        public async Task<ActionResult<ContactMessage>> CreateMessage([FromBody] CreateContactMessageDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var message = new ContactMessage
            {
                Name = dto.Name.Trim(),
                Email = dto.Email.Trim(),
                Phone = dto.Phone?.Trim(),
                Subject = dto.Subject?.Trim(),
                Message = dto.Message.Trim(),
                CreatedAt = DateTime.UtcNow,
                IsRead = false
            };

            _context.ContactMessages.Add(message);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Contact message received successfully.", id = message.Id });
        }

        // PATCH: api/contact/5/read
        [HttpPatch("{id}/read")]
        public async Task<IActionResult> MarkAsRead(int id)
        {
            var msg = await _context.ContactMessages.FindAsync(id);
            if (msg == null)
            {
                return NotFound(new { message = $"Message with id {id} not found." });
            }

            msg.IsRead = true;
            await _context.SaveChangesAsync();
            return Ok(msg);
        }
    }
}
