using System;
using System.Globalization;

namespace SalFuncionario
{
    class Funcionario
    {
        public string Name;
        public double SalarioBruto;
        public double Imposto;

        public double SalarioLiquido()
        {
            return SalarioBruto - Imposto;
        }

        public void AumentarSalario(double porcentagem)
        {
            SalarioBruto = SalarioBruto + (SalarioBruto * porcentagem / 100.0);
        }

        public override string ToString()
        {
            return Name + ", R$ " + SalarioLiquido().ToString("F2", CultureInfo.InvariantCulture);
               
        }
    }
}
