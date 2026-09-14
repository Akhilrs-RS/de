using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ManickDentalApi.Data;
using ManickDentalApi.DTOs;
using ManickDentalApi.Models;

namespace ManickDentalApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AppointmentsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AppointmentsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/appointments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Appointment>>> GetAppointments([FromQuery] string? status = null)
        {
            var query = _context.Appointments.AsQueryable();

            if (!string.IsNullOrWhiteSpace(status))
            {
                query = query.Where(a => a.Status.ToLower() == status.ToLower());
            }

            var list = await query.OrderByDescending(a => a.CreatedAt).ToListAsync();
            return Ok(list);
        }

        // GET: api/appointments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Appointment>> GetAppointment(int id)
        {
            var appointment = await _context.Appointments.FindAsync(id);
            if (appointment == null)
            {
                return NotFound(new { message = $"Appointment with id {id} not found." });
            }

            return Ok(appointment);
        }

        // POST: api/appointments
        [HttpPost]
        public async Task<ActionResult<Appointment>> CreateAppointment([FromBody] CreateAppointmentDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var appointment = new Appointment
            {
                FullName = dto.FullName.Trim(),
                PhoneNumber = dto.PhoneNumber.Trim(),
                PreferredDate = dto.PreferredDate?.Trim() ?? string.Empty,
                PreferredTime = string.IsNullOrWhiteSpace(dto.PreferredTime) ? "Morning (9:30Am - 12:30PM)" : dto.PreferredTime.Trim(),
                Service = string.IsNullOrWhiteSpace(dto.Service) ? "General Checkups" : dto.Service.Trim(),
                Notes = dto.Notes?.Trim(),
                Status = "Pending",
                CreatedAt = DateTime.UtcNow
            };

            _context.Appointments.Add(appointment);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAppointment), new { id = appointment.Id }, appointment);
        }

        // PATCH: api/appointments/5/status
        [HttpPatch("{id}/status")]
        public async Task<IActionResult> UpdateStatus(int id, [FromBody] UpdateAppointmentStatusDto dto)
        {
            var appointment = await _context.Appointments.FindAsync(id);
            if (appointment == null)
            {
                return NotFound(new { message = $"Appointment with id {id} not found." });
            }

            appointment.Status = dto.Status.Trim();
            await _context.SaveChangesAsync();

            return Ok(appointment);
        }

        // DELETE: api/appointments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAppointment(int id)
        {
            var appointment = await _context.Appointments.FindAsync(id);
            if (appointment == null)
            {
                return NotFound(new { message = $"Appointment with id {id} not found." });
            }

            _context.Appointments.Remove(appointment);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Appointment deleted successfully." });
        }
    }
}
