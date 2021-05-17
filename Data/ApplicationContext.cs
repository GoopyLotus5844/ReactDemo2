using Microsoft.EntityFrameworkCore;
using ReactDemo2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactDemo2.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions options)
                : base(options)
        {
        }
        public DbSet<Student> Students { get; set; }
    }
}
