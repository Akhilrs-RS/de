using System.ComponentModel.DataAnnotations;

namespace ManickDentalApi.Models
{
    public class DoctorProfile
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(150)]
        public string Name { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string Role { get; set; } = "Lead Dentist";

        [Required]
        [MaxLength(150)]
        public string Specialization { get; set; } = string.Empty;

        [MaxLength(100)]
        public string Experience { get; set; } = string.Empty;

        [MaxLength(2000)]
        public string Bio { get; set; } = string.Empty;

        [MaxLength(250)]
        public string? ImageUrl { get; set; }

        public int Order { get; set; } = 0;
    }
}
