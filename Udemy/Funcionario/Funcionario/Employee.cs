using System;

namespace Funcionario
{
    //Programa que recebe nome e salário de dois funcionários e cálcula a média//
     class Employee
    {
        public string Name;
        public double Wage;
        static void Main(string[] args)
        {
            Employee f1 = new Employee();
            Employee f2 = new Employee();

            Console.WriteLine("Digite o nome do primeiro funcionário: ");
            f1.Name = Console.ReadLine();
            Console.WriteLine("Digite o salário do primeiro funcionário: ");
            f1.Wage = double.Parse(Console.ReadLine());

            Console.WriteLine("Digite o nome do segundo funcionário: ");
            f2.Name = Console.ReadLine();
            Console.WriteLine("Digite o salário do segundo funcionário: ");
            f2.Wage = double.Parse(Console.ReadLine());

            double avg = (f1.Wage + f2.Wage) / 2;

            Console.WriteLine($"A média salarial dos funcionários é: R$ {avg} " );
        }
    }
}
