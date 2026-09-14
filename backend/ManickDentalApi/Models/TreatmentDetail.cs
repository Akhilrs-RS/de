using System.ComponentModel.DataAnnotations;

namespace ManickDentalApi.Models
{
    public class TreatmentDetail
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Slug { get; set; } = string.Empty; // general-checkup, smile-makeover, invisible-aligners, cosmetic-dentistry

        [Required]
        [MaxLength(150)]
        public string Title { get; set; } = string.Empty;

        [MaxLength(150)]
        public string Subtitle { get; set; } = string.Empty;

        [Required]
        [MaxLength(2000)]
        public string Description { get; set; } = string.Empty;

        [MaxLength(250)]
        public string? HeroImageUrl { get; set; }

        [MaxLength(250)]
        public string OverviewHeading { get; set; } = string.Empty;

        public string OverviewCol1 { get; set; } = string.Empty;

        public string OverviewCol2 { get; set; } = string.Empty;

        [MaxLength(200)]
        public string ProcessHeading { get; set; } = string.Empty;

        // JSON array: [{ "number": "01", "title": "..." }, ...]
        public string RoadmapStepsJson { get; set; } = "[]";

        [MaxLength(200)]
        public string BenefitsTitle { get; set; } = string.Empty;

        [MaxLength(200)]
        public string BenefitsSubtitle { get; set; } = string.Empty;

        // JSON array of strings or objects: ["...", "..."]
        public string BenefitsJson { get; set; } = "[]";

        [MaxLength(250)]
        public string BannerTitle { get; set; } = string.Empty;

        [MaxLength(250)]
        public string? BannerImageUrl { get; set; }

        [MaxLength(200)]
        public string CandidatesHeading { get; set; } = string.Empty;

        // JSON array: [{ "title": "...", "subtitle": "..." }]
        public string CandidatesJson { get; set; } = "[]";

        // JSON array: [{ "question": "...", "answer": "..." }]
        public string FaqsJson { get; set; } = "[]";
    }
}
