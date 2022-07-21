using System;


namespace SistemaDeNotas
{

    class Aluno
    {
        public string Name;
        public double Nota1;
        public double Nota2;
        public double Nota3;


        public double NotaFinal()
        {
            return Nota1 + Nota2 + Nota3;
        }

        public bool SituacaoAluno()
        {
            if (NotaFinal() >= 60)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public double NotaRestante()
        {
            if (NotaFinal() >= 60)
            {
                return 0.0;
            }
            else
            {
                return 60.0 - NotaFinal();
            }
        }
    }
}
