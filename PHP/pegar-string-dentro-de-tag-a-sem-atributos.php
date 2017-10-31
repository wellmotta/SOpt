<?php
// Pergunta: https://pt.stackoverflow.com/questions/229996
//carregamento da url
$dom = new DOMDocument();
libxml_use_internal_errors(true);
$dom->loadHTMLFile("http://google.com.br");

//pega somente os links
$links = $dom->getElementsByTagName('a');
$nlinks = 0;
foreach($links as $link) {
    // Recupera o texto dentro da tag
    echo $link->nodeValue, PHP_EOL;
    // Recupera o valor de um atributo
    echo $links->item($nlinks)->getAttribute('href'), PHP_EOL;
    $nlinks++;
}
