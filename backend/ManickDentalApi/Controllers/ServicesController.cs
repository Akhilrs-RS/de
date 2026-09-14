using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ManickDentalApi.Data;
using ManickDentalApi.Models;

namespace ManickDentalApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ServicesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ServicesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/services
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ServiceItem>>> GetAllServices()
        {
            var services = await _context.Services
                .OrderBy(s => s.Order)
                .ToListAsync();
            return Ok(services);
        }

        // GET: api/services/{slug}
        [HttpGet("{slug}")]
        public async Task<ActionResult<ServiceItem>> GetServiceBySlug(string slug)
        {
            var service = await _context.Services
                .FirstOrDefaultAsync(s => s.Slug.ToLower() == slug.ToLower());

            if (service == null)
            {
                return NotFound(new { message = $"Service with slug '{slug}' not found." });
            }

            return Ok(service);
        }
    }
}
