# Pergunta: https://pt.stackoverflow.com/questions/244224

# Exemplo dexia somente letras, numeros e espacos
import re
lista = [["de carlos,"],["des.dd carlossd,"],["Peixe, texto!"]]
for i, j in enumerate(lista): lista[i] = re.sub('[^a-zA-Z0-9 ]', '', re.sub(r'\.', ' ', j[0]))
print (lista)

# Exemplo que mantem um Ponto final que esta em uma frase, e nao um . que esteja no meio de uma palavra, e qualquer outro caractere especial.
import re
lista = [["Esse, ponto! vai permanecer, porque e um ponto final. Agora esses.pontos.serao.substituidos.por.espacos.porque.esta no@ meio¨&*() das #palavras"]]
for i, j in enumerate(lista): lista[i] = re.sub('[^a-zA-Z0-9 .]', '', re.sub(r'\.\b', ' ', j[0]))
print (lista)
