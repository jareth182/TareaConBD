using System.ComponentModel.DataAnnotations;

namespace ListasMVC.Models
{
    public class Planta
    {
        [Key]
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Origen { get; set; }
        public string Especie { get; set; }
        public string AlturaMaxima { get; set; }
        public string Notas { get; set; }
        public string Imagen { get; set; }
    }
}