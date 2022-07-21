using System;
using System.Globalization;

namespace SistemaDeNotas
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Aluno aluno1 = new Aluno();

            Console.WriteLine("Digite o nome do Aluno: ");
            aluno1.Name = Console.ReadLine();

            Console.WriteLine("Digite as três notas do Aluno: ");
            aluno1.Nota1 = double.Parse(Console.ReadLine(),CultureInfo.InvariantCulture);
            aluno1.Nota2 = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            aluno1.Nota3 = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            Console.WriteLine($"Nota final = {aluno1.NotaFinal().ToString("F2",CultureInfo.InvariantCulture)}");
            
            if (aluno1.SituacaoAluno())
            {
                Console.WriteLine("APROVADO");
            } else
            {
                Console.WriteLine("REPROVADO");
                Console.WriteLine($"Faltaram " + aluno1.NotaRestante().
                    ToString("F2", CultureInfo.InvariantCulture)+ " PONTOS"); ;
            }
        }
    }
}
