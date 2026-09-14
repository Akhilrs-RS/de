using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace ManickDentalApi.DTOs
{
    public class UploadImageDto
    {
        [Required]
        public string PageKey { get; set; } = string.Empty;

        [Required]
        public string SectionKey { get; set; } = string.Empty;

        [Required]
        public IFormFile File { get; set; } = null!;
    }

    public class PageImageResponseDto
    {
        public int Id { get; set; }
        public string PageKey { get; set; } = string.Empty;
        public string SectionKey { get; set; } = string.Empty;
        public string Label { get; set; } = string.Empty;
        public string? AspectRatio { get; set; }
        public string DefaultAssetUrl { get; set; } = string.Empty;
        public string? CustomImageUrl { get; set; }
        public string EffectiveUrl => string.IsNullOrEmpty(CustomImageUrl) ? DefaultAssetUrl : CustomImageUrl;
        public DateTime UpdatedAt { get; set; }
    }
}
