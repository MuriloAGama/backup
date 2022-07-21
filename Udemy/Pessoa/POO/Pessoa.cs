using System;

namespace POO
{
         class Pessoa
    {

        //Programa que recebe o nome e idade de duas pessoas e retorna qual é mais velha.//


        public string Name;
        public int Age;
        static void Main(string[] args)
        {
            Pessoa p1 = new Pessoa();
            Pessoa p2 = new Pessoa();
            
            Console.WriteLine("Digite o nome da primeira pessoa: ");
            p1.Name = Console.ReadLine();
            Console.WriteLine("Digite a idade da primeira pessoa: ");
            p1.Age = int.Parse(Console.ReadLine());

            Console.WriteLine("Digite o nome da segunda pessoa: ");
            p2.Name = Console.ReadLine();
            Console.WriteLine("Digite a idade da segunda pessoa: ");
            p2.Age = int.Parse(Console.ReadLine());

            if (p1.Age > p2.Age) {
                Console.WriteLine("A pessoa mais velha é : " + p1.Name);
            } 
            else
            {
                Console.WriteLine("A pessoa mais velha é : " + p2.Name);
            }

        }
    }
}
