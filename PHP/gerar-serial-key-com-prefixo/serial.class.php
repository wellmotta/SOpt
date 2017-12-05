<?php

/* Pergunta: https://pt.stackoverflow.com/questions/256680
 * Demonstração: https://repl.it/repls/VoluminousGrimCaracal
 */

class Serial
{
  private $prefixo = "";
  public $letras = array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
  public $numeros = array(0,1,2,3,4,5,6,7,8,9);
  
  /* 
   * Método construtor
   * Cria um prefixo para cada objeto criado
   */
  public function __construct() {
    $max = count($this->letras)-1;
    for($a=0;$a<5;$a++) {
      $this->prefixo .= $this->letras[rand(0, $max)];
    }
    return $this;
  }
    
  /* 
   * Método get
   * Gera um serial de 15 digitos toda vez que o método for chamado
   */
  public function get() {
    $serial = '';
    $max = count($this->numeros)-1;
    for($b=0;$b<15;$b++){
      $serial .= (!($b % 5) && $b ? '-' : ''). $this->numeros[rand(0, $max)];
    }
    echo $this->prefixo."-".$serial."\n";
    return $this;
  }
  
}
