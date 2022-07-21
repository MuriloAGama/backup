using System;
using System.Globalization;

namespace Sistema_de_estoque
{
    internal class Produto
    {
        public string Name;
        public double Price;
        public int Amount;

        public double ValorTotalEmEstoque()
        {
            return Price * Amount;
        }

        public void AdicionarProdutos(int amount)
        {
            Amount += amount;
        }

        public void RemoverProdutos(int amount)
        {
            Amount -= amount;
        }

        public override string ToString()
        {
            return Name + ", $ " + Price.ToString("F2", CultureInfo.InvariantCulture)
                + ", " + Amount + " unidades, Total: $ " +
                ValorTotalEmEstoque().ToString("F2", CultureInfo.InvariantCulture);
        }
    }
}
