using System;


namespace Triangulo
{
    class Triangulo
    {
        public double SideA;
        public double SideB;
        public double SideC;


        //Método para calcular a área//
        public double Zone()
        {
            double p = (SideA + SideB + SideC) / 2.0;
            return Math.Sqrt(p * (p - SideA) * (p - SideB) * (p - SideC));
           
        }
    }
}
