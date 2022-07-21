using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GreeniverseChatBot.models
{
    [Table("RespostaChat")]
    public class RespostaChat
    {
        [Column("id")]
        [Display(Name = "Código")]
        public int Id { get; set; }

        [Column("Resposta")]
        [Display(Name = "Resposta")]
        public string Resposta { get; set; }

        [Column("Mensagem")]
        [Display(Name = "Mensagem")]
        public string Mensagem { get; set; }
    }
}
