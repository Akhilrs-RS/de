using ManickDentalApi.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Manick Dental Clinic API",
        Version = "v1",
        Description = "ASP.NET Core 8 Web API with MySQL for Manick Dental Clinic. Serves all website pages, treatments, clinic tour, appointments, and contact inquiries."
    });
});

// Configure MySQL DbContext
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppDbContext>(options =>
{
    // Explicit MySQL 8.0 version avoids startup failure before MySQL container is ready
    options.UseMySql(connectionString, new MySqlServerVersion(new Version(8, 0, 36)));
});

// Enable CORS for frontend clients
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.WithOrigins(
                "http://localhost:5173", 
                "http://localhost:3000", 
                "http://127.0.0.1:5173",
                "http://localhost:8080"
              )
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials();
    });
});

var app = builder.Build();

// Configure HTTP request pipeline
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Manick Dental Clinic API v1");
    c.RoutePrefix = string.Empty; // Serve Swagger UI at root "/"
});

app.UseCors("AllowAll");

// Enable serving uploaded media files from wwwroot
var webRoot = app.Environment.WebRootPath ?? Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
var uploadsDir = Path.Combine(webRoot, "uploads");
if (!Directory.Exists(uploadsDir))
{
    Directory.CreateDirectory(uploadsDir);
}
app.UseStaticFiles();

app.UseAuthorization();

app.MapControllers();

// Ensure Database is created and Seed initial data with retry logic for Docker
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var logger = services.GetRequiredService<ILogger<Program>>();
    var context = services.GetRequiredService<AppDbContext>();

    int retries = 15;
    while (retries > 0)
    {
        try
        {
            logger.LogInformation("Connecting to MySQL and ensuring database exists...");
            await context.Database.EnsureCreatedAsync();

            // Ensure AdminUsers & PageImages tables exist even if database was created by an older schema version
            await context.Database.ExecuteSqlRawAsync(@"
                CREATE TABLE IF NOT EXISTS `AdminUsers` (
                    `Id` INT NOT NULL AUTO_INCREMENT,
                    `Email` VARCHAR(255) NOT NULL,
                    `Username` VARCHAR(255) NOT NULL,
                    `PasswordHash` LONGTEXT NOT NULL,
                    `ResetCode` VARCHAR(255) NULL,
                    `ResetCodeExpiry` DATETIME(6) NULL,
                    `CreatedAt` DATETIME(6) NOT NULL,
                    `LastLoginAt` DATETIME(6) NULL,
                    PRIMARY KEY (`Id`),
                    UNIQUE KEY `IX_AdminUsers_Email` (`Email`)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
            ");

            await context.Database.ExecuteSqlRawAsync(@"
                CREATE TABLE IF NOT EXISTS `PageImages` (
                    `Id` INT NOT NULL AUTO_INCREMENT,
                    `PageKey` VARCHAR(100) NOT NULL,
                    `SectionKey` VARCHAR(100) NOT NULL,
                    `Label` VARCHAR(255) NOT NULL,
                    `AspectRatio` VARCHAR(50) NOT NULL,
                    `DefaultAssetUrl` LONGTEXT NOT NULL,
                    `CustomImageUrl` LONGTEXT NULL,
                    `ImageData` LONGBLOB NULL,
                    `ContentType` VARCHAR(100) NULL,
                    `UpdatedAt` DATETIME(6) NOT NULL,
                    PRIMARY KEY (`Id`),
                    UNIQUE KEY `IX_PageImages_PageKey_SectionKey` (`PageKey`, `SectionKey`)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
            ");

            // Migration safeguard: Ensure ImageData and ContentType exist if table was created previously
            try
            {
                await context.Database.ExecuteSqlRawAsync(@"
                    ALTER TABLE `PageImages` ADD COLUMN IF NOT EXISTS `ImageData` LONGBLOB NULL;
                ");
                await context.Database.ExecuteSqlRawAsync(@"
                    ALTER TABLE `PageImages` ADD COLUMN IF NOT EXISTS `ContentType` VARCHAR(100) NULL;
                ");
            }
            catch (Exception alterEx)
            {
                logger.LogWarning("PageImages column check warning: {Message}", alterEx.Message);
            }

            await DataSeeder.SeedAsync(context);
            logger.LogInformation("MySQL database successfully connected and seeded!");
            break;
        }
        catch (Exception ex)
        {
            retries--;
            logger.LogWarning("Waiting for MySQL database to be ready... Retries remaining: {Retries}. Error: {Message}", retries, ex.Message);
            if (retries == 0)
            {
                logger.LogError(ex, "Could not connect to MySQL database after 15 attempts. API will still serve requests, but database operations may fail.");
            }
            else
            {
                await Task.Delay(3000);
            }
        }
    }
}

app.Run();
