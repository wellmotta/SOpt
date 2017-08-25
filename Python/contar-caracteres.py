# coding: utf-8

# Pergunta: https://pt.stackoverflow.com/questions/232172

# Informe uma frase
frase = input("Informe uma frase: ")
# Informe qual o caractere que deseja saber a quantidade contida na frase
caracter = input("Informe o caracter que deseja contar: ")
# método: count - Conta quantas vezes o caractere foi usado na frase
# Imprime a quantidade.
print("Sua frase tem: " + str(frase.count(caracter)) + " digito(s): " + str(caracter))
