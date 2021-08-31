using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class Produto : BaseModels
    {
        public string Nome { get; set; }
        public decimal Valor { get; set; }
        public Categoria Categoria { get; set; }
    }
}
