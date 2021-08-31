using Data.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Context
{
    public class ConnContext : DbContext
    {
        public DbSet<Produto> Produto { get; set; }
        public DbSet<Categoria> Categoria { get; set; }
        public ConnContext():base("Data Source=192.168.0.152;Initial Catalog=Produto-categoria;Persist Security Info=True;User ID=rafinha;Password=123321@")
        {
        }
    }
}
