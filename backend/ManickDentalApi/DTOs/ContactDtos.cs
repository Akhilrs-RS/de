using System.ComponentModel.DataAnnotations;

namespace ManickDentalApi.DTOs
{
    public class CreateContactMessageDto
    {
        [Required(ErrorMessage = "Name is required")]
        [MaxLength(150)]
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        [MaxLength(150)]
        public string Email { get; set; } = string.Empty;

        [MaxLength(50)]
        public string? Phone { get; set; }

        [MaxLength(200)]
        public string? Subject { get; set; }

        [Required(ErrorMessage = "Message is required")]
        [MaxLength(2000)]
        public string Message { get; set; } = string.Empty;
    }
}
