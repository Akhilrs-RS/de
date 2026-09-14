using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ManickDentalApi.Data;
using ManickDentalApi.Models;

namespace ManickDentalApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContentController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ContentController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/content/home
        [HttpGet("home")]
        public async Task<IActionResult> GetHomeContent()
        {
            var doctor = await _context.DoctorProfiles.FirstOrDefaultAsync();
            var treatments = await _context.Treatments.Select(t => new
            {
                t.Slug,
                t.Title,
                t.Subtitle,
                t.Description,
                t.HeroImageUrl
            }).ToListAsync();

            var clinicInfo = await _context.ClinicInfos.FirstOrDefaultAsync();

            return Ok(new
            {
                hero = new
                {
                    headline = "Where Every Smile Becomes a Masterpiece",
                    subheading = "Experience Modern dentistry where advanced Technology meets exceptional, deeply human care.",
                    primaryCta = "Book Appointment",
                    secondaryCta = "Explore Our Care"
                },
                doctor,
                signatureTreatments = treatments,
                whyChooseUs = new[]
                {
                    new { title = "Strict Hygiene Standards", desc = "Sterilized instruments, single-use materials, and a clean, safe environment every visit." },
                    new { title = "Gentle, Patient Care", desc = "We treat every patient with patience and compassion — especially those with dental anxiety." },
                    new { title = "Transparent Pricing", desc = "No hidden charges. Clear costs explained before any treatment begins." },
                    new { title = "Modern Equipment", desc = "Up-to-date dental technology for accurate diagnosis and comfortable treatment." }
                },
                testimonial = new
                {
                    quote = "From the first consultation to my final smile, every detail felt exceptional.",
                    author = "Patient Community"
                },
                clinicInfo
            });
        }

        // GET: api/content/about
        [HttpGet("about")]
        public async Task<IActionResult> GetAboutContent()
        {
            var doctor = await _context.DoctorProfiles.FirstOrDefaultAsync();
            var clinicInfo = await _context.ClinicInfos.FirstOrDefaultAsync();

            return Ok(new
            {
                title = "Caring for Your Smile Since Day One",
                story = "Manick Dental Clinic was founded with a simple mission: provide honest, gentle, and affordable dental care to the families of Kazhuvanthitai and the surrounding community.",
                taglines = new[] { "More Than Dentistry.", "A New Way To Feel Confident." },
                leadDentist = doctor,
                clinicInfo
            });
        }

        // GET: api/content/clinic-tour
        [HttpGet("clinic-tour")]
        public async Task<ActionResult<IEnumerable<ClinicTourItem>>> GetClinicTour()
        {
            var items = await _context.ClinicTourItems
                .OrderBy(t => t.Order)
                .ToListAsync();
            return Ok(items);
        }

        // GET: api/content/our-story
        [HttpGet("our-story")]
        public async Task<IActionResult> GetOurStory()
        {
            var clinicInfo = await _context.ClinicInfos.FirstOrDefaultAsync();
            return Ok(new
            {
                title = "Our Story",
                subtitle = "Crafting Smiles with Heart and Science",
                foundingYear = 2010,
                location = "Kuzhithurai, Kanyakumari District, Tamil Nadu",
                mission = "To provide accessible, high-precision dental healthcare with gentle human warmth.",
                values = new[]
                {
                    "Patient First, Always",
                    "Uncompromised Sterilization & Safety",
                    "Continuous Adoption of Digital Dentistry",
                    "Transparent & Honest Treatment Planning"
                },
                clinicInfo
            });
        }

        // GET: api/content/clinic-info
        [HttpGet("clinic-info")]
        public async Task<ActionResult<ClinicInfo>> GetClinicInfo()
        {
            var info = await _context.ClinicInfos.FirstOrDefaultAsync();
            if (info == null)
            {
                return NotFound();
            }
            return Ok(info);
        }
    }
}
