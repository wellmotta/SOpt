<?php

/* Pergunta: https://pt.stackoverflow.com/questions/256680
 * Demonstração: https://repl.it/repls/VoluminousGrimCaracal
 */

require_once('serial.class.php');

$serial_A = new Serial();
$serial_A->get()->get()->get()
         ->get()->get()->get()
         ->get()->get()->get()
         ->get()->get()->get()
         ->get()->get()->get()
         ->get()->get()->get();
