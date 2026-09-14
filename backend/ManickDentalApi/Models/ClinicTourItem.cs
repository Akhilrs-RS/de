using System.ComponentModel.DataAnnotations;

namespace ManickDentalApi.Models
{
    public class ClinicTourItem
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(150)]
        public string Title { get; set; } = string.Empty;

        [MaxLength(500)]
        public string Description { get; set; } = string.Empty;

        [Required]
        [MaxLength(250)]
        public string ImageUrl { get; set; } = string.Empty;

        [MaxLength(100)]
        public string Category { get; set; } = "Operatory";

        public int Order { get; set; } = 0;
    }
}
