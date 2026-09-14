using Microsoft.EntityFrameworkCore;
using ManickDentalApi.Models;

namespace ManickDentalApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Appointment> Appointments => Set<Appointment>();
        public DbSet<ContactMessage> ContactMessages => Set<ContactMessage>();
        public DbSet<ServiceItem> Services => Set<ServiceItem>();
        public DbSet<TreatmentDetail> Treatments => Set<TreatmentDetail>();
        public DbSet<DoctorProfile> DoctorProfiles => Set<DoctorProfile>();
        public DbSet<ClinicTourItem> ClinicTourItems => Set<ClinicTourItem>();
        public DbSet<ClinicInfo> ClinicInfos => Set<ClinicInfo>();
        public DbSet<AdminUser> AdminUsers => Set<AdminUser>();
        public DbSet<PageImage> PageImages => Set<PageImage>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Admin indexes
            modelBuilder.Entity<AdminUser>()
                .HasIndex(u => u.Email)
                .IsUnique();

            // PageImage composite index
            modelBuilder.Entity<PageImage>()
                .HasIndex(p => new { p.PageKey, p.SectionKey })
                .IsUnique();

            // Indexes for fast lookup
            modelBuilder.Entity<ServiceItem>()
                .HasIndex(s => s.Slug)
                .IsUnique();

            modelBuilder.Entity<TreatmentDetail>()
                .HasIndex(t => t.Slug)
                .IsUnique();

            modelBuilder.Entity<Appointment>()
                .HasIndex(a => a.CreatedAt);

            modelBuilder.Entity<Appointment>()
                .HasIndex(a => a.Status);
        }
    }
}
