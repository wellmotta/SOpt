/* Pergunta: https://pt.stackoverflow.com/questions/256703
 * Demonstração: https://dotnetfiddle.net/rSm9HB
 */

using System;
using System.Collections.Generic;

public class Program
{
    static Random rnd = new Random();
    static List<string> times = new List<string>(new String[]{
        "Corinthians",
        "Palmeiras",
        "Santos",
        "Grêmio",
        "Cruzeiro",
        "Botafogo",
        "Flamengo",
        "Vasco da Gama",
        "Atlético-PR",
        "Atlético",
        "São Paulo",
        "Chapecoense",
        "Bahia",
        "Fluminense",
        "Sport Recife",
        "Coritiba",
        "Ponte Preta",
        "Avaí",
        "EC Vitória"
    });

    static List<string> Sorteados = new List<string>();

    public static void Main()
    {
        // Sorteia 10 times
        for(int i = 0; i < 10; i++) {
            // Sorteia um time
            string sorteado = times[rnd.Next(times.Count)];
            // Verifica se o time já consta na lista dos Sorteados
            int pos = Sorteados.FindIndex(x => x.StartsWith(sorteado));
            // Caso já foi, faz descremento da variável i
            if (pos > -1) {
                i--;
            } else {
                // Caso não tenha cido, adiciona na lista dos Sorteados
                Sorteados.Add(sorteado);
            }
        }
        // Apenas imprime no Console a lista dos Sorteados.
        Sorteados.ForEach(Console.WriteLine);
    }
}
