<?php

# https://pt.stackoverflow.com/questions/233681

/*
 * Verifica se a variavél $String contém a palavra TESTE
 * utilizando a função: preg_match()
 */
if (preg_match("/TESTE/i", $String)) {
    echo "Uma correspondência foi encontrada.";
} else {
    echo "Não foi encontrada uma correspondência.";
}

/*
 * Verifica se a variavél $String contém a palavra TESTE
 * utilizando a função: stripos()
 */
if (stripos($String, 'TESTE') !== false) {
    echo "Existe";
} else {
    echo "Não existe";
}
