using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ListasMVC.Data;
using ListasMVC.Models;

namespace ListasMVC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlantasController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PlantasController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Planta>>> GetPlantas()
        {
            return await _context.Plantas.ToListAsync();
        }
    }
}