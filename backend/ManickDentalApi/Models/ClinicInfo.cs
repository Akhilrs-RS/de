using System.ComponentModel.DataAnnotations;

namespace ManickDentalApi.Models
{
    public class ClinicInfo
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(150)]
        public string ClinicName { get; set; } = "Manick Dental Clinic";

        [MaxLength(250)]
        public string Tagline { get; set; } = "An atelier of dental artistry — where clinical precision meets editorial grace.";

        [MaxLength(300)]
        public string Address { get; set; } = "Melpuram Road, Kazhuvanthitai, Kuzhithurai, Kanyakumari Dist, Tamil Nadu 629163";

        [MaxLength(50)]
        public string Phone { get; set; } = "+91 7358834772";

        [MaxLength(100)]
        public string Email { get; set; } = "manickdental@gmail.com";

        [MaxLength(150)]
        public string WeekdayHours { get; set; } = "Monday - Saturday: 9:30 AM - 1:30 PM & 4:30 - 7:30 PM";

        [MaxLength(150)]
        public string SundayHours { get; set; } = "Sunday: Closed / Emergency By Appointment";
    }
}
