using GreeniverseChatBot.models;
using Microsoft.EntityFrameworkCore;

namespace GreeniverseChatBot.src.data
{
    public class Context : DbContext
    {
        public Context (DbContextOptions<Context> options) :base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<RespostaChat> RespostaChat { get; set; }
    }
}
