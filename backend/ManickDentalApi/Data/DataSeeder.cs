using System.Text.Json;
using ManickDentalApi.Models;
using Microsoft.EntityFrameworkCore;

namespace ManickDentalApi.Data
{
    public static class DataSeeder
    {
        public static async Task SeedAsync(AppDbContext context)
        {
            // Seed Clinic Info
            if (!await context.ClinicInfos.AnyAsync())
            {
                context.ClinicInfos.Add(new ClinicInfo
                {
                    ClinicName = "Manick Dental Clinic",
                    Tagline = "An atelier of dental artistry — where clinical precision meets editorial grace.",
                    Address = "Melpuram Road, Kazhuvanthitai, Kuzhithurai, Kanyakumari Dist, Tamil Nadu 629163",
                    Phone = "+91 7358834772",
                    Email = "manickdental@gmail.com",
                    WeekdayHours = "Monday - Saturday: 9:30 AM - 1:30 PM & 4:30 - 7:30 PM",
                    SundayHours = "Sunday: Closed / Emergency By Appointment"
                });
                await context.SaveChangesAsync();
            }

            // Seed Doctor Profile
            if (!await context.DoctorProfiles.AnyAsync())
            {
                context.DoctorProfiles.Add(new DoctorProfile
                {
                    Name = "Dr. Elena Marchetti",
                    Role = "Lead Dentist",
                    Specialization = "Cosmetic & Restorative Dentistry",
                    Experience = "20+ years refining the art of the smile",
                    Bio = "Dr. Marchetti approaches each patient as a canvas — blending clinical mastery with an editorial eye for facial harmony, light, and proportion.",
                    ImageUrl = "/assets/h5.png",
                    Order = 1
                });
                await context.SaveChangesAsync();
            }

            // Seed Services
            if (!await context.Services.AnyAsync())
            {
                var services = new List<ServiceItem>
                {
                    new ServiceItem
                    {
                        Slug = "general-checkup",
                        Title = "General Checkup & Consultation",
                        ShortDescription = "Routine checkup and thorough oral evaluation",
                        Description = "A thorough oral examination is the foundation of good dental health. Our dentist will assess your teeth, gums, and overall oral condition, identify any concerns early, and create a personalised care plan.",
                        FeaturesJson = JsonSerializer.Serialize(new[] { "Full oral examination", "X-rays if required", "Gum health assessment", "Personalized treatment plan" }),
                        Disclaimer = "Checkup findings are specific to each patient. Results may vary.",
                        ImageUrl = "/assets/s2.png",
                        Order = 1
                    },
                    new ServiceItem
                    {
                        Slug = "scaling-cleaning",
                        Title = "Scaling & Cleaning",
                        ShortDescription = "Removal of tartar and polishing",
                        Description = "Professional scaling and polishing removes hardened plaque (tartar) and surface stains that regular brushing cannot eliminate. Regular cleaning helps prevent gum disease, bad breath, and cavities.",
                        FeaturesJson = JsonSerializer.Serialize(new[] { "Removal of tartar and plaque", "Polishing for a clean, smooth surface", "Gum health evaluation", "Home-care guidance" }),
                        Disclaimer = "Results depend on individual oral hygiene and dental condition.",
                        ImageUrl = "/assets/s3.png",
                        Order = 2
                    },
                    new ServiceItem
                    {
                        Slug = "tooth-filling",
                        Title = "Tooth Filling (Restoration)",
                        ShortDescription = "Composite tooth-coloured restoration",
                        Description = "Cavities are treated with modern, tooth-coloured composite fillings that blend naturally with your tooth. We remove the decayed portion and restore the tooth to its proper shape and function.",
                        FeaturesJson = JsonSerializer.Serialize(new[] { "Composite (tooth-coloured) fillings", "Restoration of tooth function", "Removal of decay", "Minimally invasive technique" }),
                        Disclaimer = "Information provided is general. Your dentist will advise on the best option for your situation.",
                        ImageUrl = "/assets/s4.png",
                        Order = 3
                    },
                    new ServiceItem
                    {
                        Slug = "root-canal",
                        Title = "Root Canal Treatment",
                        ShortDescription = "Save infected teeth with painless care",
                        Description = "When decay or infection reaches the nerve of the tooth, root canal treatment can save the tooth and relieve pain. Modern techniques and anaesthesia make the procedure far more comfortable than many patients expect.",
                        FeaturesJson = JsonSerializer.Serialize(new[] { "Removal of infected pulp", "Sealed with biocompatible material", "Thorough canal cleaning", "Crown placement if needed" }),
                        Disclaimer = "Root canal treatment outcomes vary by case. Your dentist will evaluate and advise accordingly.",
                        ImageUrl = "/assets/s5.png",
                        Order = 4
                    },
                    new ServiceItem
                    {
                        Slug = "tooth-extraction",
                        Title = "Tooth Extraction",
                        ShortDescription = "Gentle and precise extraction",
                        Description = "When a tooth cannot be saved by other means, extraction is performed gently and precisely. We ensure your comfort throughout with appropriate anaesthesia and provide post-extraction care instructions.",
                        FeaturesJson = JsonSerializer.Serialize(new[] { "Simple and surgical extractions", "Post-extraction care guidance", "Local anesthesia for comfort", "Replacement options discussed if needed" }),
                        Disclaimer = "Information provided is general. Your dentist will advise on the best option for your situation.",
                        ImageUrl = "/assets/s6.png",
                        Order = 5
                    },
                    new ServiceItem
                    {
                        Slug = "cosmetic-dentistry",
                        Title = "Cosmetic Dentistry",
                        ShortDescription = "Veneers, whitening and contouring",
                        Description = "Enhance your smile with cosmetic dental treatments tailored to your aesthetic goals. Whether it's whitening, reshaping, or other cosmetic procedures, we help you achieve a smile you feel confident about.",
                        FeaturesJson = JsonSerializer.Serialize(new[] { "Smile assessment and planning", "Personalised cosmetic treatment planning", "Cosmetic bonding and contouring", "Minimally invasive technique" }),
                        Disclaimer = "Information provided is general. Your dentist will advise on the best option for your situation.",
                        ImageUrl = "/assets/s7.png",
                        Order = 6
                    },
                    new ServiceItem
                    {
                        Slug = "teeth-whitening",
                        Title = "Teeth Whitening",
                        ShortDescription = "Professional enamel brightening",
                        Description = "Brighten your smile with safe and effective professional teeth whitening treatments designed to remove stains and restore a naturally radiant appearance.",
                        FeaturesJson = JsonSerializer.Serialize(new[] { "Smile assessment and shade analysis", "Post-treatment care guidance", "Professional whitening treatment", "Stain and discoloration removal" }),
                        Disclaimer = "Information provided is general. Your dentist will advise on the best option for your situation.",
                        ImageUrl = "/assets/s8.png",
                        Order = 7
                    },
                    new ServiceItem
                    {
                        Slug = "dental-implants",
                        Title = "Dental Implants",
                        ShortDescription = "Permanent tooth replacement",
                        Description = "Restore missing teeth with durable and natural-looking dental implants designed to improve your smile, comfort, and overall oral function.",
                        FeaturesJson = JsonSerializer.Serialize(new[] { "Comprehensive dental evaluation", "High-quality implant restoration", "Personalized implant planning", "Post-treatment care support" }),
                        Disclaimer = "Information provided is general. Your dentist will advise on the best option for your situation.",
                        ImageUrl = "/assets/s9.png",
                        Order = 8
                    },
                    new ServiceItem
                    {
                        Slug = "crowns-bridges",
                        Title = "Crowns & Bridges",
                        ShortDescription = "Ceramic restorative crowns",
                        Description = "Restore damaged or missing teeth with custom-made crowns and bridges that blend seamlessly with your natural smile, providing both strength and aesthetic appeal.",
                        FeaturesJson = JsonSerializer.Serialize(new[] { "Custom-shade matching", "Durable materials (ceramic)", "Protection for weakened teeth", "Gap replacement for missing teeth" }),
                        Disclaimer = "Information provided is general. Your dentist will advise on the best option for your situation.",
                        ImageUrl = "/assets/s10.png",
                        Order = 9
                    },
                    new ServiceItem
                    {
                        Slug = "mouth-guards",
                        Title = "Mouth Guards",
                        ShortDescription = "Night guards and athletic protection",
                        Description = "Custom-fitted mouth guards to protect your teeth from grinding (bruxism) while sleeping, and specialized sports guards to prevent injuries during physical activities.",
                        FeaturesJson = JsonSerializer.Serialize(new[] { "Custom fit for comfort", "Protection against teeth grinding", "Sports injury prevention", "Durable and safe materials" }),
                        Disclaimer = "Information provided is general. Your dentist will advise on the best option for your situation.",
                        ImageUrl = "/assets/s11.png",
                        Order = 10
                    },
                    new ServiceItem
                    {
                        Slug = "tooth-reshaping",
                        Title = "Tooth Reshaping",
                        ShortDescription = "Enamel recontouring and smoothing",
                        Description = "Minor adjustments to the shape, length, or surface of your teeth to create a more balanced and even smile. A quick and painless way to improve dental aesthetics.",
                        FeaturesJson = JsonSerializer.Serialize(new[] { "Smoothing uneven edges", "Adjusting tooth length", "Improving overall symmetry", "Quick, painless procedure" }),
                        Disclaimer = "Information provided is general. Your dentist will advise on the best option for your situation.",
                        ImageUrl = "/assets/s12.png",
                        Order = 11
                    },
                    new ServiceItem
                    {
                        Slug = "veneers-crowns",
                        Title = "Veneers & Crowns",
                        ShortDescription = "Porcelain veneers for smile makeover",
                        Description = "Transform your smile with ultra-thin porcelain veneers and high-quality crowns designed to cover imperfections, improve colour, and restore the shape of your teeth.",
                        FeaturesJson = JsonSerializer.Serialize(new[] { "Smile makeover planning", "High-aesthetic porcelain", "Correction of chipped teeth", "Long-lasting results" }),
                        Disclaimer = "Information provided is general. Your dentist will advise on the best option for your situation.",
                        ImageUrl = "/assets/s13.png",
                        Order = 12
                    },
                    new ServiceItem
                    {
                        Slug = "digital-xray",
                        Title = "Digital X-Ray",
                        ShortDescription = "Low radiation high-res imaging",
                        Description = "Advanced digital X-rays provide detailed, high-resolution images of your teeth and jaw bone, allowing for accurate diagnosis and precise treatment planning with minimal radiation.",
                        FeaturesJson = JsonSerializer.Serialize(new[] { "Digital high-res imaging", "Minimal radiation exposure", "Detection of hidden decay", "Accurate treatment planning" }),
                        Disclaimer = "Information provided is general. Your dentist will advise on the best option for your situation.",
                        ImageUrl = "/assets/s14.png",
                        Order = 13
                    }
                };

                context.Services.AddRange(services);
                await context.SaveChangesAsync();
            }

            // Seed Treatment Details (the 4 signature treatments)
            if (!await context.Treatments.AnyAsync())
            {
                var treatments = new List<TreatmentDetail>
                {
                    new TreatmentDetail
                    {
                        Slug = "general-checkup",
                        Title = "General Checkup &",
                        Subtitle = "Consultation",
                        Description = "Routine dental checkups are essential to detect issues early and maintain healthy teeth and gums. We provide complete dental care with a gentle, patient-focused approach.",
                        HeroImageUrl = "/assets/s1.png",
                        OverviewHeading = "A complete Look at Your Oral Health",
                        OverviewCol1 = "Routine checkups are the foundation of a healthy smile. Regular dental evaluations can prevent unexpected and severe issues ensuring optimal oral health, early detection and complete peace of mind.",
                        OverviewCol2 = "Our comprehensive approach combines advanced digital diagnostics with personalized care. During your visit, our experienced dental team carefully assesses your teeth, gums, and bite to create a tailored treatment plan focusing on prevention.",
                        ProcessHeading = "A complete Look at Your Oral Health",
                        RoadmapStepsJson = JsonSerializer.Serialize(new[]
                        {
                            new { number = "01", title = "Initial Examination" },
                            new { number = "02", title = "Digital Assessment" },
                            new { number = "03", title = "Professional Consultation" },
                            new { number = "04", title = "Personalized Care Plan" }
                        }),
                        BenefitsTitle = "Prevention is Always Better Than Treatment.",
                        BenefitsSubtitle = "Check Up Benefits",
                        BenefitsJson = JsonSerializer.Serialize(new[]
                        {
                            "Detect problems early",
                            "Prevent tooth decay and gum disease",
                            "Maintain healthy gums",
                            "Avoid costly urgent treatments",
                            "Receive professional oral hygiene advice",
                            "Keep your smile looking its best"
                        }),
                        BannerTitle = "Small Checkups. Long-Lasting Smiles.",
                        BannerImageUrl = "/assets/g.jpg",
                        CandidatesHeading = "Who Should Get a Dental Checkup?",
                        CandidatesJson = JsonSerializer.Serialize(new[]
                        {
                            new { title = "Families & Kids", subtitle = "Regular preventive checkups" },
                            new { title = "Dental Concerns", subtitle = "Pain, sensitivity or discomfort" },
                            new { title = "Smile Maintenance", subtitle = "Keeping your teeth and gums healthy" }
                        }),
                        FaqsJson = JsonSerializer.Serialize(new[]
                        {
                            new { question = "How often should I visit the dentist?", answer = "Most dentists recommend visiting every 6 months for a routine checkup and cleaning." },
                            new { question = "Does a dental checkup hurt?", answer = "No, routine dental checkups are completely painless and non-invasive." },
                            new { question = "How long does a consultation take?", answer = "A comprehensive checkup typically takes between 30 to 45 minutes." },
                            new { question = "Do I need an appointment?", answer = "We recommend scheduling in advance to guarantee your preferred time." },
                            new { question = "What happens if a dental issue is found?", answer = "We will discuss it openly with you and provide a clear, transparent care plan." }
                        })
                    },
                    new TreatmentDetail
                    {
                        Slug = "smile-makeover",
                        Title = "Smile",
                        Subtitle = "Makeover",
                        Description = "Transform your smile with a personalized combination of advanced cosmetic dental treatments, designed to enhance your confidence and bring out your best smile.",
                        HeroImageUrl = "/assets/s.png",
                        OverviewHeading = "A complete Transformation. A Confident You.",
                        OverviewCol1 = "A smile makeover is a personalized approach to improving the appearance of your teeth and smile. From colour and shape to alignment and overall balance, every detail is carefully planned to create results that look naturally beautiful and uniquely yours.",
                        OverviewCol2 = "Our experienced dental team combines advanced techniques with artistic precision to help you achieve a smile that feels as good as it looks.",
                        ProcessHeading = "Your Journey to a Beautiful Smile.",
                        RoadmapStepsJson = JsonSerializer.Serialize(new[]
                        {
                            new { number = "01", title = "Smile Assessment" },
                            new { number = "02", title = "Digital Smile Planning" },
                            new { number = "03", title = "Personalized Treatment" },
                            new { number = "04", title = "Your New Smile" }
                        }),
                        BenefitsTitle = "A Beautiful Smile Starts With Confidence.",
                        BenefitsSubtitle = "Smile Makeover Benefits",
                        BenefitsJson = JsonSerializer.Serialize(new[]
                        {
                            "Enhances the appearance of your smile",
                            "Improves tooth shape and symmetry",
                            "Corrects discoloration and imperfections",
                            "Creates a balanced, natural-looking smile",
                            "Boosts confidence in every moment"
                        }),
                        BannerTitle = "Designed Around You. Crafted for Confidence.",
                        BannerImageUrl = "/assets/ss.png",
                        CandidatesHeading = "Who Can Benefit From a Smile Makeover?",
                        CandidatesJson = JsonSerializer.Serialize(new[]
                        {
                            new { title = "Discolored Teeth", subtitle = "Restore a brighter and more radiant smile." },
                            new { title = "Uneven or Damaged Teeth", subtitle = "Improve shape, symmetry and overall appearance." },
                            new { title = "Gaps & Alignment Concerns", subtitle = "Create a more balanced and harmonious smile" }
                        }),
                        FaqsJson = JsonSerializer.Serialize(new[]
                        {
                            new { question = "What is included in a smile makeover?", answer = "A smile makeover combines treatments tailored to your unique goals, such as veneers, whitening, and bonding." },
                            new { question = "How long does a smile makeover take?", answer = "Timelines range from 1-2 visits for whitening to a few weeks for custom porcelain veneers." },
                            new { question = "Is a smile makeover painful?", answer = "Most procedures are minimally invasive and virtually painless." },
                            new { question = "Will my new smile look natural?", answer = "Yes, every smile is designed with facial proportion and natural translucency." },
                            new { question = "How long do smile makeover results last?", answer = "With proper care, porcelain restorations can last 10 to 15 years or longer." }
                        })
                    },
                    new TreatmentDetail
                    {
                        Slug = "invisible-aligners",
                        Title = "INVISIBLE",
                        Subtitle = "ALIGNERS",
                        Description = "Straighten your teeth discreetly without metal braces. Experience a modern, comfortable, and removable orthodontic treatment tailored specifically to your lifestyle.",
                        HeroImageUrl = "/assets/s.png",
                        OverviewHeading = "A Modern Way to Straighten Your Smile.",
                        OverviewCol1 = "Invisible aligners offer a subtle and convenient alternative to traditional metal braces. Custom-made from smooth, medical-grade plastic, these clear trays gently shift your teeth into place over time—giving you a perfect smile without compromising your everyday look.",
                        OverviewCol2 = "Our dental team utilizes advanced 3D scanning to design custom aligners that fit comfortably and deliver predictable, efficient results.",
                        ProcessHeading = "Your Journey to Straight Teeth.",
                        RoadmapStepsJson = JsonSerializer.Serialize(new[]
                        {
                            new { number = "01", title = "3D Digital Consultation & Scan" },
                            new { number = "02", title = "Custom Aligner Fabrication" },
                            new { number = "03", title = "Wear Your Trays Daily" },
                            new { number = "04", title = "Reveal Your Straight Smile" }
                        }),
                        BenefitsTitle = "Clear Aligners. Seamless Results.",
                        BenefitsSubtitle = "Invisible Aligner Benefits",
                        BenefitsJson = JsonSerializer.Serialize(new[]
                        {
                            "Nearly Invisible: Straighten teeth discreetly without notice",
                            "Removable: Eat, drink, brush, and floss with ease",
                            "Maximum Comfort: Smooth edges with no sharp metal wires",
                            "Fewer Visits: Requires fewer in-office checkups",
                            "Predictable Results: See your projected outcome before starting"
                        }),
                        BannerTitle = "Designed Around You. Crafted for Confidence.",
                        BannerImageUrl = "/assets/g.png",
                        CandidatesHeading = "Who Can Benefit From a Smile Makeover?",
                        CandidatesJson = JsonSerializer.Serialize(new[]
                        {
                            new { title = "Crowded & Overlapped Teeth", subtitle = "Easily straighten overlapping teeth for better hygiene and aesthetics." },
                            new { title = "Gaps & Spacing Issues", subtitle = "Close unwanted spaces smoothly and evenly." },
                            new { title = "Bite Misalignments", subtitle = "Correct mild-to-moderate overbites, underbites, and crossbites." }
                        }),
                        FaqsJson = JsonSerializer.Serialize(new[]
                        {
                            new { question = "How do invisible aligners work?", answer = "Aligners apply gradual, calibrated pressure to gently shift teeth into alignment." },
                            new { question = "How many hours a day do I need to wear them?", answer = "Aligners should be worn for 20 to 22 hours per day." },
                            new { question = "Are clear aligners painful to wear?", answer = "You may feel mild pressure for a day or two after switching to a new tray." },
                            new { question = "How long does invisible aligner treatment take?", answer = "Most cases are completed within 6 to 18 months." },
                            new { question = "How do I clean and maintain my aligners?", answer = "Rinse with lukewarm water and brush gently with a soft toothbrush." }
                        })
                    },
                    new TreatmentDetail
                    {
                        Slug = "cosmetic-dentistry",
                        Title = "Cosmetic",
                        Subtitle = "Dentistry",
                        Description = "Transform your teeth with advanced cosmetic dental treatments tailored to your unique features. Experience world-class care that combines artistry and technology for a flawless smile.",
                        HeroImageUrl = "/assets/s1.png",
                        OverviewHeading = "Artfully Crafted Dental Aesthetics.",
                        OverviewCol1 = "Cosmetic dentistry goes beyond oral health to enhance the natural beauty of your smile. From subtle adjustments to complete transformations, our personalized treatments correct discolouration, gaps, and chips while preserving your natural tooth structure.",
                        OverviewCol2 = "Our expert cosmetic dentists utilize state-of-the-art digital imaging to design a custom treatment plan that complements your facial symmetry.",
                        ProcessHeading = "Your Path to a Stunner Smile.",
                        RoadmapStepsJson = JsonSerializer.Serialize(new[]
                        {
                            new { number = "01", title = "Initial Aesthetic Assessment" },
                            new { number = "02", title = "Digital Smile Design & Mockup" },
                            new { number = "03", title = "Tailored Cosmetic Treatment" },
                            new { number = "04", title = "Reveal Your New Smile" }
                        }),
                        BenefitsTitle = "Aesthetic Precision. Radiant Results.",
                        BenefitsSubtitle = "Cosmetic Dentistry Benefits",
                        BenefitsJson = JsonSerializer.Serialize(new[]
                        {
                            "Brighten discoloured teeth and refine tooth shapes",
                            "Custom treatment plans tailored to your face structure",
                            "Modern techniques designed for maximum comfort",
                            "Durable materials for a permanent boost in confidence",
                            "Improve overall alignment and bite harmony alongside beauty"
                        }),
                        BannerTitle = "Designed for Elegance. Crafted for Perfection",
                        BannerImageUrl = "/assets/g.jpg",
                        CandidatesHeading = "who should get cosmetic dentistry?",
                        CandidatesJson = JsonSerializer.Serialize(new[]
                        {
                            new { title = "Stained or Discolored Teeth", subtitle = "Restore bright, youthful, and vibrant white shades." },
                            new { title = "Chipped, Cracked, or Worn Teeth", subtitle = "Smooth out surface imperfections for seamless symmetry." },
                            new { title = "Gaps & Uneven Shapes", subtitle = "Harmonize your entire smile with custom-contoured solutions." }
                        }),
                        FaqsJson = JsonSerializer.Serialize(new[]
                        {
                            new { question = "What treatments fall under cosmetic dentistry?", answer = "Cosmetic dentistry includes whitening, porcelain veneers, bonding, and contouring." },
                            new { question = "How long do cosmetic dental treatments take?", answer = "From one 60-minute visit for whitening to 2 visits for custom veneers." },
                            new { question = "Is cosmetic dentistry covered by insurance?", answer = "Elective treatments may not be fully covered, but restorative aspects can be." },
                            new { question = "How do I maintain my cosmetic results?", answer = "Practice good daily oral hygiene and attend regular 6-month checkups." },
                            new { question = "Are cosmetic dental procedures painful?", answer = "No, procedures are gentle and minimally invasive with anesthesia as needed." }
                        })
                    }
                };

                context.Treatments.AddRange(treatments);
                await context.SaveChangesAsync();
            }

            // Seed Clinic Tour items
            if (!await context.ClinicTourItems.AnyAsync())
            {
                var tourItems = new List<ClinicTourItem>
                {
                    new ClinicTourItem { Title = "Welcome Reception & Lounge", Description = "A tranquil, boutique waiting area designed for calmness and comfort.", ImageUrl = "/assets/c1.png", Category = "Reception", Order = 1 },
                    new ClinicTourItem { Title = "State-of-the-art Operatory Suite", Description = "Ergonomic treatment chairs equipped with soothing ambient illumination.", ImageUrl = "/assets/c2.png", Category = "Operatory", Order = 2 },
                    new ClinicTourItem { Title = "Digital Imaging & 3D Scanning Studio", Description = "Advanced intraoral 3D scanners and minimal radiation digital imaging.", ImageUrl = "/assets/c3.jpg", Category = "Diagnostics", Order = 3 },
                    new ClinicTourItem { Title = "Hospital-grade Sterilization Hub", Description = "Multi-step sterilization protocols exceeding rigorous international standards.", ImageUrl = "/assets/c4.png", Category = "Sterilization", Order = 4 },
                    new ClinicTourItem { Title = "Consultation & Smile Design Suite", Description = "Private consulting rooms where patients co-create their new smiles.", ImageUrl = "/assets/c5.png", Category = "Consultation", Order = 5 },
                    new ClinicTourItem { Title = "Specialized Aesthetic Operatory", Description = "High-precision lighting and micro-dentistry tools for smile artistry.", ImageUrl = "/assets/c6.png", Category = "Operatory", Order = 6 }
                };

                context.ClinicTourItems.AddRange(tourItems);
                await context.SaveChangesAsync();
            }

            // Seed sample appointments for quick testing in DBeaver
            if (!await context.Appointments.AnyAsync())
            {
                var sampleAppointments = new List<Appointment>
                {
                    new Appointment
                    {
                        FullName = "Priya Sharma",
                        PhoneNumber = "+91 9845123456",
                        PreferredDate = "15-10-2026",
                        PreferredTime = "Morning (9:30Am - 12:30PM)",
                        Service = "General Checkups",
                        Notes = "Routine checkup and routine cleaning",
                        Status = "Confirmed",
                        CreatedAt = DateTime.UtcNow.AddDays(-2)
                    },
                    new Appointment
                    {
                        FullName = "Rahul Varma",
                        PhoneNumber = "+91 9740987654",
                        PreferredDate = "18-10-2026",
                        PreferredTime = "Evening (4:30PM - 7:30PM)",
                        Service = "Smile Makeover",
                        Notes = "Interested in porcelain veneers consultation",
                        Status = "Pending",
                        CreatedAt = DateTime.UtcNow.AddDays(-1)
                    },
                    new Appointment
                    {
                        FullName = "Ananya Nair",
                        PhoneNumber = "+91 9123456780",
                        PreferredDate = "20-10-2026",
                        PreferredTime = "Morning (9:30Am - 12:30PM)",
                        Service = "Invisible Aligners",
                        Notes = "Consultation for clear aligner trays",
                        Status = "Pending",
                        CreatedAt = DateTime.UtcNow.AddHours(-4)
                    }
                };

                context.Appointments.AddRange(sampleAppointments);
                await context.SaveChangesAsync();
            }

            // Seed sample contact messages
            if (!await context.ContactMessages.AnyAsync())
            {
                var sampleContacts = new List<ContactMessage>
                {
                    new ContactMessage
                    {
                        Name = "Karthik Subramanian",
                        Email = "karthik.s@example.com",
                        Phone = "+91 9988776655",
                        Subject = "Dental Implant Inquiry",
                        Message = "Hello, I would like to enquire about the cost and procedure timeline for single tooth implant.",
                        CreatedAt = DateTime.UtcNow.AddDays(-3),
                        IsRead = true
                    },
                    new ContactMessage
                    {
                        Name = "Deepa Menon",
                        Email = "deepa.menon@example.com",
                        Phone = "+91 9445566778",
                        Subject = "Clinic Hours on Saturday",
                        Message = "Are walk-in consultations accepted on Saturday evenings?",
                        CreatedAt = DateTime.UtcNow.AddDays(-1),
                        IsRead = false
                    }
                };

                context.ContactMessages.AddRange(sampleContacts);
                await context.SaveChangesAsync();
            }

            // Seed Admin User
            if (!await context.AdminUsers.AnyAsync())
            {
                context.AdminUsers.Add(new AdminUser
                {
                    Email = "admin@manickdental.com",
                    Username = "Clinic Administrator",
                    PasswordHash = Services.PasswordHasher.HashPassword("Admin@1234"),
                    CreatedAt = DateTime.UtcNow
                });
                await context.SaveChangesAsync();
            }

            // Seed Page Image Catalog for Admin Image Management
            if (!await context.PageImages.AnyAsync())
            {
                var pageImages = new List<PageImage>
                {
                    // Home Page
                    new PageImage { PageKey = "home", SectionKey = "hero", Label = "Home Hero Smiling Patient", AspectRatio = "1:1", DefaultAssetUrl = "/assets/hero.png" },
                    new PageImage { PageKey = "home", SectionKey = "doctor", Label = "Lead Dentist Profile: Dr. Elena Marchetti", AspectRatio = "4:5", DefaultAssetUrl = "/assets/h5.png" },
                    new PageImage { PageKey = "home", SectionKey = "treatment-checkup", Label = "Signature: General Checkup", AspectRatio = "4:3", DefaultAssetUrl = "/assets/s1.png" },
                    new PageImage { PageKey = "home", SectionKey = "treatment-makeover", Label = "Signature: Smile Makeover", AspectRatio = "4:3", DefaultAssetUrl = "/assets/s.png" },
                    new PageImage { PageKey = "home", SectionKey = "treatment-aligners", Label = "Signature: Invisible Aligners", AspectRatio = "4:3", DefaultAssetUrl = "/assets/s.png" },
                    new PageImage { PageKey = "home", SectionKey = "treatment-cosmetic", Label = "Signature: Cosmetic Dentistry", AspectRatio = "4:3", DefaultAssetUrl = "/assets/s1.png" },

                    // Our Story Page
                    new PageImage { PageKey = "our-story", SectionKey = "hero", Label = "Our Story Hero Image", AspectRatio = "4:5", DefaultAssetUrl = "/assets/o1.png" },
                    new PageImage { PageKey = "our-story", SectionKey = "team-dr-james", Label = "Principal Dentist: Dr. James Bennett", AspectRatio = "4:3", DefaultAssetUrl = "/assets/h5.png" },
                    new PageImage { PageKey = "our-story", SectionKey = "team-amelia", Label = "Senior Dental Nurse: Amelia Carter", AspectRatio = "4:3", DefaultAssetUrl = "/assets/o2.png" },
                    new PageImage { PageKey = "our-story", SectionKey = "card-crowns", Label = "Case 1 & 5: Dental Crowns", AspectRatio = "4:3", DefaultAssetUrl = "/assets/story_dental_crowns.png" },
                    new PageImage { PageKey = "our-story", SectionKey = "card-aligners", Label = "Case 2 & 6: Clear Aligners", AspectRatio = "4:3", DefaultAssetUrl = "/assets/story_clear_aligners.png" },
                    new PageImage { PageKey = "our-story", SectionKey = "card-whitening", Label = "Case 3 & 4: Teeth Whitening", AspectRatio = "4:3", DefaultAssetUrl = "/assets/story_teeth_whitening.png" },
                    new PageImage { PageKey = "our-story", SectionKey = "operatory-banner", Label = "Operatory Suite Banner: More Than Just a Treatment", AspectRatio = "16:9", DefaultAssetUrl = "/assets/our.jpg" },

                    // Services Page (13 services)
                    new PageImage { PageKey = "services", SectionKey = "s2", Label = "Service: General Checkup & Consultation", AspectRatio = "1:1", DefaultAssetUrl = "/assets/s2.png" },
                    new PageImage { PageKey = "services", SectionKey = "s3", Label = "Service: Scaling & Cleaning", AspectRatio = "1:1", DefaultAssetUrl = "/assets/s3.png" },
                    new PageImage { PageKey = "services", SectionKey = "s4", Label = "Service: Tooth Filling (Restoration)", AspectRatio = "1:1", DefaultAssetUrl = "/assets/s4.png" },
                    new PageImage { PageKey = "services", SectionKey = "s5", Label = "Service: Root Canal Treatment", AspectRatio = "1:1", DefaultAssetUrl = "/assets/s5.png" },
                    new PageImage { PageKey = "services", SectionKey = "s6", Label = "Service: Tooth Extraction", AspectRatio = "1:1", DefaultAssetUrl = "/assets/s6.png" },
                    new PageImage { PageKey = "services", SectionKey = "s7", Label = "Service: Cosmetic Dentistry", AspectRatio = "1:1", DefaultAssetUrl = "/assets/s7.png" },
                    new PageImage { PageKey = "services", SectionKey = "s8", Label = "Service: Teeth Whitening", AspectRatio = "1:1", DefaultAssetUrl = "/assets/s8.png" },
                    new PageImage { PageKey = "services", SectionKey = "s9", Label = "Service: Dental Implants", AspectRatio = "1:1", DefaultAssetUrl = "/assets/s9.png" },
                    new PageImage { PageKey = "services", SectionKey = "s10", Label = "Service: Crowns & Bridges", AspectRatio = "1:1", DefaultAssetUrl = "/assets/s10.png" },
                    new PageImage { PageKey = "services", SectionKey = "s11", Label = "Service: Mouth Guards", AspectRatio = "1:1", DefaultAssetUrl = "/assets/s11.png" },
                    new PageImage { PageKey = "services", SectionKey = "s12", Label = "Service: Tooth Reshaping", AspectRatio = "1:1", DefaultAssetUrl = "/assets/s12.png" },
                    new PageImage { PageKey = "services", SectionKey = "s13", Label = "Service: Veneers & Crowns", AspectRatio = "1:1", DefaultAssetUrl = "/assets/s13.png" },
                    new PageImage { PageKey = "services", SectionKey = "s14", Label = "Service: Digital X-Ray", AspectRatio = "1:1", DefaultAssetUrl = "/assets/s14.png" },

                    // Clinic Tour Page (6 areas)
                    new PageImage { PageKey = "clinic-tour", SectionKey = "c1", Label = "Clinic Tour: Reception & Waiting Lounge", AspectRatio = "16:9", DefaultAssetUrl = "/assets/c1.png" },
                    new PageImage { PageKey = "clinic-tour", SectionKey = "c2", Label = "Clinic Tour: Reception Desk & Green Wall", AspectRatio = "1:1", DefaultAssetUrl = "/assets/c2.png" },
                    new PageImage { PageKey = "clinic-tour", SectionKey = "c3", Label = "Clinic Tour: Private Consultation Room", AspectRatio = "3:4", DefaultAssetUrl = "/assets/c3.jpg" },
                    new PageImage { PageKey = "clinic-tour", SectionKey = "c4", Label = "Clinic Tour: Treatment Operatory Suite", AspectRatio = "16:9", DefaultAssetUrl = "/assets/c4.png" },
                    new PageImage { PageKey = "clinic-tour", SectionKey = "c5", Label = "Clinic Tour: Digital X-Ray & Imaging Lab", AspectRatio = "16:9", DefaultAssetUrl = "/assets/c5.png" },
                    new PageImage { PageKey = "clinic-tour", SectionKey = "c6", Label = "Clinic Tour: Sterilization & Hygiene Facility", AspectRatio = "16:9", DefaultAssetUrl = "/assets/c6.png" },

                    // Treatments Pages
                    new PageImage { PageKey = "treatments", SectionKey = "checkup-hero", Label = "General Checkup: Hero Graphic", AspectRatio = "1:1", DefaultAssetUrl = "/assets/s1.png" },
                    new PageImage { PageKey = "treatments", SectionKey = "checkup-banner", Label = "General Checkup: Wide Banner", AspectRatio = "3:4", DefaultAssetUrl = "/assets/g.jpg" },
                    new PageImage { PageKey = "treatments", SectionKey = "makeover-hero", Label = "Smile Makeover: Hero Graphic", AspectRatio = "4:5", DefaultAssetUrl = "/assets/s.png" },
                    new PageImage { PageKey = "treatments", SectionKey = "makeover-banner", Label = "Smile Makeover: Wide Banner", AspectRatio = "1:1", DefaultAssetUrl = "/assets/ss.png" },
                    new PageImage { PageKey = "treatments", SectionKey = "aligners-hero", Label = "Invisible Aligners: Hero Graphic", AspectRatio = "4:5", DefaultAssetUrl = "/assets/s.png" },
                    new PageImage { PageKey = "treatments", SectionKey = "aligners-banner", Label = "Invisible Aligners: Wide Banner", AspectRatio = "4:3", DefaultAssetUrl = "/assets/g.png" },
                    new PageImage { PageKey = "treatments", SectionKey = "cosmetic-hero", Label = "Cosmetic Dentistry: Hero Graphic", AspectRatio = "1:1", DefaultAssetUrl = "/assets/s1.png" },
                    new PageImage { PageKey = "treatments", SectionKey = "cosmetic-banner", Label = "Cosmetic Dentistry: Wide Banner", AspectRatio = "3:4", DefaultAssetUrl = "/assets/g.jpg" },

                    // Booking & Contact
                    new PageImage { PageKey = "book", SectionKey = "side-image", Label = "Book Appointment: Side Consultation Image", AspectRatio = "3:4", DefaultAssetUrl = "/assets/book.png" },
                    new PageImage { PageKey = "contact", SectionKey = "hero-image", Label = "Contact Page: Hero Graphic", AspectRatio = "4:5", DefaultAssetUrl = "/assets/cc1.png" },
                    new PageImage { PageKey = "contact", SectionKey = "map-image", Label = "Contact Page: Map Location Preview", AspectRatio = "16:9", DefaultAssetUrl = "/assets/cc2.png" }
                };

                context.PageImages.AddRange(pageImages);
                await context.SaveChangesAsync();
            }
        }
    }
}
