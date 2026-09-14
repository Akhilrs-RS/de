using System.ComponentModel.DataAnnotations;

namespace ManickDentalApi.Models
{
    public class ServiceItem
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Slug { get; set; } = string.Empty;

        [Required]
        [MaxLength(150)]
        public string Title { get; set; } = string.Empty;

        [MaxLength(300)]
        public string? ShortDescription { get; set; }

        [Required]
        [MaxLength(2000)]
        public string Description { get; set; } = string.Empty;

        // Serialized JSON array of features (e.g. ["Feature 1", "Feature 2"])
        public string FeaturesJson { get; set; } = "[]";

        [MaxLength(500)]
        public string? Disclaimer { get; set; }

        [MaxLength(250)]
        public string? ImageUrl { get; set; }

        public int Order { get; set; } = 0;
    }
}
