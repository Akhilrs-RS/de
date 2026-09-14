using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ManickDentalApi.Data;
using ManickDentalApi.Models;

namespace ManickDentalApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TreatmentsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TreatmentsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/treatments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TreatmentDetail>>> GetAllTreatments()
        {
            var treatments = await _context.Treatments.ToListAsync();
            return Ok(treatments);
        }

        // GET: api/treatments/{slug}
        // Slugs: general-checkup, smile-makeover, invisible-aligners, cosmetic-dentistry
        [HttpGet("{slug}")]
        public async Task<ActionResult<TreatmentDetail>> GetTreatmentBySlug(string slug)
        {
            var treatment = await _context.Treatments
                .FirstOrDefaultAsync(t => t.Slug.ToLower() == slug.ToLower());

            if (treatment == null)
            {
                return NotFound(new { message = $"Treatment page '{slug}' not found." });
            }

            return Ok(treatment);
        }
    }
}
