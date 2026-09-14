using System.ComponentModel.DataAnnotations;

namespace ManickDentalApi.DTOs
{
    public class CreateAppointmentDto
    {
        [Required(ErrorMessage = "Full Name is required")]
        [MaxLength(150)]
        public string FullName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Phone Number is required")]
        [MaxLength(50)]
        public string PhoneNumber { get; set; } = string.Empty;

        [MaxLength(50)]
        public string PreferredDate { get; set; } = string.Empty;

        [MaxLength(100)]
        public string PreferredTime { get; set; } = "Morning (9:30Am - 12:30PM)";

        [Required(ErrorMessage = "Service is required")]
        [MaxLength(100)]
        public string Service { get; set; } = "General Checkups";

        [MaxLength(1000)]
        public string? Notes { get; set; }
    }

    public class UpdateAppointmentStatusDto
    {
        [Required]
        [MaxLength(50)]
        public string Status { get; set; } = "Confirmed"; // Pending, Confirmed, Completed, Cancelled
    }
}
