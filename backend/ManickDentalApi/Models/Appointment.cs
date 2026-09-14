using System;
using System.ComponentModel.DataAnnotations;

namespace ManickDentalApi.Models
{
    public class Appointment
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(150)]
        public string FullName { get; set; } = string.Empty;

        [Required]
        [MaxLength(50)]
        public string PhoneNumber { get; set; } = string.Empty;

        [MaxLength(50)]
        public string PreferredDate { get; set; } = string.Empty;

        [MaxLength(100)]
        public string PreferredTime { get; set; } = "Morning (9:30Am - 12:30PM)";

        [Required]
        [MaxLength(100)]
        public string Service { get; set; } = "General Checkups";

        [MaxLength(1000)]
        public string? Notes { get; set; }

        [MaxLength(50)]
        public string Status { get; set; } = "Pending";

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
