using System;
using System.Globalization;

namespace Retangulo
{
    /*Programa que recebe valores de largura e altura de um retângulo, e mostra o valor
    da sua área, perímetro e diagonal*/
    class Program
    {
        static void Main(string[] args)
        {
            Retangulo r1 = new Retangulo();

            Console.WriteLine("Digite a altura do retângulo: ");
            r1.Altura = double.Parse(Console.ReadLine(),CultureInfo.InvariantCulture);

            Console.WriteLine("Digite a largura do retângulo: ");
            r1.Largura = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            Console.WriteLine($"Area = {r1.Area().ToString("F2",CultureInfo.InvariantCulture)}");
            Console.WriteLine($"Perímetro = {r1.Perimetro().ToString("F2", CultureInfo.InvariantCulture)}");
            Console.WriteLine($"Diagonal = {r1.Diagonal().ToString("F2", CultureInfo.InvariantCulture)}");
        }
    }
}
