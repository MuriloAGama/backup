using System;

namespace ConsoleApp1
{
    internal class Program
    {
        enum color : int {
            red = -3,
            green,
            blue,
        }
        static void Main(string[] args)
        {
            int i;

            for(i = 0; i<=10;i++)
            {
                if (i == 4)
                {
                    Console.WriteLine(i + ""); continue;

                }

                else if (i!= 4)
                    Console.WriteLine(i + "");
                else
                    break;
            }
        }
    }
}
