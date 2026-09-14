using System.Security.Cryptography;
using System.Text;

namespace ManickDentalApi.Services
{
    public static class PasswordHasher
    {
        public static string HashPassword(string password)
        {
            using var sha256 = SHA256.Create();
            var bytes = Encoding.UTF8.GetBytes("MANICK_SALT_" + password);
            var hash = sha256.ComputeHash(bytes);
            return Convert.ToBase64String(hash);
        }

        public static bool VerifyPassword(string password, string storedHash)
        {
            var computed = HashPassword(password);
            return computed == storedHash;
        }
    }
}
