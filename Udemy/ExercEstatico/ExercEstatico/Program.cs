using System;
using System.Globalization;

namespace ExercEstatico
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Qual câmbio você deseja comprar?");
            string nameCambio = Console.ReadLine();
            Console.WriteLine("Quantos você vai comprar: ");
             double qteCambio = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            if(nameCambio == "Dólar")
            {
                double dolar = ConversorDeMoeda.Dolar(qteCambio);
                Console.WriteLine("Valor a ser pago em reais = " + dolar.ToString("F2", CultureInfo.InvariantCulture));
            } 
            else
            {
                double euro = ConversorDeMoeda.Euro(qteCambio);
                Console.WriteLine("Valor a ser pago em reais = " + euro.ToString("F2", CultureInfo.InvariantCulture));
            }
        }
    }
}
