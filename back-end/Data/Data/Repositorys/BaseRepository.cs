using Data.Context;
using Data.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repositorys
{
    public abstract class BaseRepository <M> where M : BaseModels
    {
        public void Create(M model)
        {
            using (var context = new ConnContext())
            {
                context.Set<M>().Add(model);
                context.SaveChanges();
            }
        }
        public List<M> Read()
        {
            using (var context = new ConnContext())
            {
                return context.Set<M>().ToList();
            }
        }
        public M Read(int id)
        {
            using (var context = new ConnContext())
            {
                return context.Set<M>().Find(id);
            }
        }
        public void Update(M model)
        {
            using (var context =new ConnContext())
            {
                context.Entry<M>(model).State = EntityState.Modified;
                context.SaveChanges();
            }
        }
        public void Delete(int id)
        {
            using (var context = new ConnContext())
            {
                context.Entry<M>(this.Read(id)).State = EntityState.Deleted;
                context.SaveChanges();
            }
        }
    }
}
