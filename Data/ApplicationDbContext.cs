using Microsoft.EntityFrameworkCore;
using ListasMVC.Models;

namespace ListasMVC.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Planta> Plantas { get; set; }
    }
}