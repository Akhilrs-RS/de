using System.ComponentModel.DataAnnotations;

namespace ManickDentalApi.Models
{
    public class PageImage
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string PageKey { get; set; } = string.Empty; // "home", "our-story", "services", "clinic-tour", "treatments", "book", "contact"

        [Required]
        [MaxLength(100)]
        public string SectionKey { get; set; } = string.Empty; // "hero", "operatory-banner", "team-dr-james", "card-1", etc.

        [Required]
        [MaxLength(200)]
        public string Label { get; set; } = string.Empty; // e.g. "Our Story Operatory Banner"

        [MaxLength(500)]
        public string? AspectRatio { get; set; } // e.g. "16:9", "4:3", "Square 1:1"

        [Required]
        [MaxLength(500)]
        public string DefaultAssetUrl { get; set; } = string.Empty;

        [MaxLength(500)]
        public string? CustomImageUrl { get; set; } // Set when uploaded via admin, e.g. "/uploads/img_123.jpg"

        public byte[]? ImageData { get; set; } // Stores raw image binary
        
        [MaxLength(100)]
        public string? ContentType { get; set; } // e.g. "image/jpeg"

        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}
