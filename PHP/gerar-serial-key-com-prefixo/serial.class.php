<?php

/* Pergunta: https://pt.stackoverflow.com/questions/256680
 * Demonstração: https://repl.it/repls/VoluminousGrimCaracal
 */

class Serial
{
  private $prefixo = "";
  private $max = 0;
  public $chars = array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');

  /* 
   * Método construtor
   * Cria um prefixo para cada objeto criado
   */
  public function __construct() {
    $this->max = count($this->chars)-1;
    for($a=0;$a<5;$a++) {
      $this->prefixo .= $this->chars[rand(0, $this->max)];
    }
  }

  /* 
   * Método getSerial
   * Gera um serial de 15 digitos toda vez que o método for chamado
   */
  public function getSerial() {
    $serial = '';
    for($b=0;$b<15;$b++){
      $serial .= (!($b % 5) && $b ? '-' : ''). $this->chars[rand(0, $this->max)];
    }
    return $this->prefixo."-".$serial;
  }

}
