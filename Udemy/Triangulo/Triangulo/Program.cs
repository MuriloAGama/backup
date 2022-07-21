using System;
using System.Globalization;
using Triangulo;

namespace Triangulo
{                 //Programa criado para calcular a área de dois triângulos//
     class Program
    {
        
        static void Main(string[] args)
        {
            Triangulo X = new Triangulo();
            Triangulo Y = new Triangulo();

            Console.WriteLine("Digite as medidas do triângulo X ");
            X.SideA = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            X.SideB = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            X.SideC = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            Console.WriteLine("Digite as medidas do triângulo Y ");
            Y.SideA = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            Y.SideB = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            Y.SideC = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);


            double zoneX = X.Zone();
            double zoneY = Y.Zone();

            Console.WriteLine($"Área de X = {zoneX.ToString("F4", CultureInfo.InvariantCulture)}");
            Console.WriteLine($"Área de y = {zoneY.ToString("F4", CultureInfo.InvariantCulture)}");

            if(zoneX > zoneY)
            {
                Console.WriteLine("Maior área: X ");
            }
            else
            {
                Console.WriteLine("Maior área: Y ");
            }
        }
    }
}
