// Pergunta: https://pt.stackoverflow.com/questions/245730/
string a = "email@email.com";
string b = "Email@email.com";

// Ira retornar Falso, porque não foi informado
// para ignorar case-sensitive
if (a.Equals(b)) {
    Console.WriteLine("Verdadeiro");
} else {
    Console.WriteLine("Falso");
}

// OrdinalIgnoreCase
// Ira retorna Verdadeiro, porque foi informado
// para ignorar case-sensitive
if (a.Equals(b, StringComparison.OrdinalIgnoreCase)) {
    Console.WriteLine("Verdadeiro");
} else {
    Console.WriteLine("Falso");
}
