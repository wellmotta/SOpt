// https://pt.stackoverflow.com/questions/236832/
// https://dotnetfiddle.net/kDSRk8
using System;
					
public class Program
{
	public static void Main()
	{
		long number = 0;
		// Dados do txt
		string dados = "020175646464654647658785362342234605143545654 10432434545 16456676577 12344565467 954554646467657776577673";
		// Remove os espaços guardando em Array
		string[] arr = dados.Split(null);
		for (int i = 1; i < arr.Length; i++) {
			// Verifica se o primeiro digito é o numero 1
			// Se for faz a soma
			if (arr[i][0].ToString() == "1") {
				number += Convert.ToInt64(arr[i]);
			}
		}
		Console.WriteLine(number);
	}
}
