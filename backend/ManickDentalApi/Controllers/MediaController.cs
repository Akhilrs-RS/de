using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ManickDentalApi.Data;
using ManickDentalApi.DTOs;
using ManickDentalApi.Models;

namespace ManickDentalApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MediaController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IWebHostEnvironment _env;
        private readonly ILogger<MediaController> _logger;

        public MediaController(AppDbContext context, IWebHostEnvironment env, ILogger<MediaController> logger)
        {
            _context = context;
            _env = env;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PageImageResponseDto>>> GetAll()
        {
            var images = await _context.PageImages
                .OrderBy(p => p.PageKey)
                .ThenBy(p => p.Id)
                .Select(p => new PageImageResponseDto
                {
                    Id = p.Id,
                    PageKey = p.PageKey,
                    SectionKey = p.SectionKey,
                    Label = p.Label,
                    AspectRatio = p.AspectRatio,
                    DefaultAssetUrl = p.DefaultAssetUrl,
                    CustomImageUrl = p.CustomImageUrl,
                    UpdatedAt = p.UpdatedAt
                })
                .ToListAsync();

            return Ok(images);
        }

        [HttpGet("{pageKey}")]
        public async Task<ActionResult<IEnumerable<PageImageResponseDto>>> GetByPage(string pageKey)
        {
            var images = await _context.PageImages
                .Where(p => p.PageKey.ToLower() == pageKey.ToLower())
                .Select(p => new PageImageResponseDto
                {
                    Id = p.Id,
                    PageKey = p.PageKey,
                    SectionKey = p.SectionKey,
                    Label = p.Label,
                    AspectRatio = p.AspectRatio,
                    DefaultAssetUrl = p.DefaultAssetUrl,
                    CustomImageUrl = p.CustomImageUrl,
                    UpdatedAt = p.UpdatedAt
                })
                .ToListAsync();

            return Ok(images);
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadImage([FromForm] UploadImageDto dto)
        {
            if (dto.File == null || dto.File.Length == 0)
            {
                return BadRequest(new { success = false, message = "No file uploaded." });
            }

            // Validate allowed extensions
            var allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".webp", ".svg" };
            var extension = Path.GetExtension(dto.File.FileName).ToLowerInvariant();
            if (!allowedExtensions.Contains(extension))
            {
                return BadRequest(new { success = false, message = "Only JPG, PNG, WEBP, or SVG images are allowed." });
            }

            // Max 15MB file size
            if (dto.File.Length > 15 * 1024 * 1024)
            {
                return BadRequest(new { success = false, message = "File size exceeds 15MB limit." });
            }

            try
            {
                byte[] fileBytes;
                using (var ms = new MemoryStream())
                {
                    await dto.File.CopyToAsync(ms);
                    fileBytes = ms.ToArray();
                }

                // Update or create database record
                var pageImage = await _context.PageImages
                    .FirstOrDefaultAsync(p => p.PageKey.ToLower() == dto.PageKey.ToLower() && p.SectionKey.ToLower() == dto.SectionKey.ToLower());

                if (pageImage != null)
                {
                    pageImage.ImageData = fileBytes;
                    pageImage.ContentType = dto.File.ContentType;
                    pageImage.UpdatedAt = DateTime.UtcNow;
                }
                else
                {
                    pageImage = new PageImage
                    {
                        PageKey = dto.PageKey.ToLower(),
                        SectionKey = dto.SectionKey.ToLower(),
                        Label = $"{dto.PageKey} - {dto.SectionKey}",
                        AspectRatio = "4:3",
                        DefaultAssetUrl = "",
                        ImageData = fileBytes,
                        ContentType = dto.File.ContentType,
                        UpdatedAt = DateTime.UtcNow
                    };
                    _context.PageImages.Add(pageImage);
                }

                await _context.SaveChangesAsync();

                // Generate public URL pointing to the image delivery endpoint
                var publicUrl = $"/api/media/image/{pageImage.Id}";
                pageImage.CustomImageUrl = publicUrl;
                await _context.SaveChangesAsync();

                return Ok(new
                {
                    success = true,
                    message = "Image uploaded and permanently stored in database successfully!",
                    imageUrl = publicUrl,
                    pageImage = new PageImageResponseDto
                    {
                        Id = pageImage.Id,
                        PageKey = pageImage.PageKey,
                        SectionKey = pageImage.SectionKey,
                        Label = pageImage.Label,
                        AspectRatio = pageImage.AspectRatio,
                        DefaultAssetUrl = pageImage.DefaultAssetUrl,
                        CustomImageUrl = pageImage.CustomImageUrl,
                        UpdatedAt = pageImage.UpdatedAt
                    }
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error uploading image for {PageKey}/{SectionKey}", dto.PageKey, dto.SectionKey);
                return StatusCode(500, new { success = false, message = "Failed to save uploaded file: " + ex.Message });
            }
        }

        [HttpPost("reset/{id}")]
        public async Task<IActionResult> ResetToDefault(int id)
        {
            var pageImage = await _context.PageImages.FindAsync(id);
            if (pageImage == null)
            {
                return NotFound(new { success = false, message = "Image slot not found." });
            }

            pageImage.CustomImageUrl = null;
            pageImage.ImageData = null;
            pageImage.ContentType = null;
            pageImage.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();

            return Ok(new
            {
                success = true,
                message = "Image reset to default asset.",
                effectiveUrl = pageImage.DefaultAssetUrl
            });
        }

        [HttpPost("reset-by-key")]
        public async Task<IActionResult> ResetByKey([FromQuery] string pageKey, [FromQuery] string sectionKey)
        {
            var pageImage = await _context.PageImages
                .FirstOrDefaultAsync(p => p.PageKey.ToLower() == pageKey.ToLower() && p.SectionKey.ToLower() == sectionKey.ToLower());

            if (pageImage == null)
            {
                return NotFound(new { success = false, message = "Image slot not found." });
            }

            pageImage.CustomImageUrl = null;
            pageImage.ImageData = null;
            pageImage.ContentType = null;
            pageImage.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();

            return Ok(new
            {
                success = true,
                message = "Image reset to default asset.",
                effectiveUrl = pageImage.DefaultAssetUrl
            });
        }

        [HttpGet("image/{id}")]
        [HttpHead("image/{id}")]
        public async Task<IActionResult> GetImageFile(int id)
        {
            var image = await _context.PageImages.FindAsync(id);
            if (image == null || image.ImageData == null)
            {
                return NotFound();
            }

            Response.Headers.Append("Cache-Control", "no-cache, must-revalidate");
            return File(image.ImageData, image.ContentType ?? "image/jpeg");
        }
    }
}
