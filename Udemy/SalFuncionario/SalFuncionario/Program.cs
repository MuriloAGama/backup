using System;
using System.Globalization;


namespace SalFuncionario
{
    class Program
    {
        static void Main(string[] args)
        {
            Funcionario f1 = new Funcionario();

            Console.Write("Digite o nome do funcionário: ");
            f1.Name = Console.ReadLine();

            Console.Write("Digite o salário bruto do funcionário: ");
            f1.SalarioBruto = double.Parse(Console.ReadLine(),CultureInfo.InvariantCulture);

            Console.Write("Digite o valor do imposto: ");
            f1.Imposto = double.Parse(Console.ReadLine(),CultureInfo.InvariantCulture);

            Console.WriteLine();
            Console.WriteLine("Dados do funcionário: " + f1);
            

            Console.WriteLine();
            Console.WriteLine("Digite a porcentagem para aumentar o salário: ");
            double percsalario = double.Parse(Console.ReadLine(),CultureInfo.InvariantCulture);
            f1.AumentarSalario(percsalario);
            Console.WriteLine($"Dados atualizados: {f1}");
        }
    }
}
