<?php

/* Pergunta: https://pt.stackoverflow.com/questions/256680
 * Demonstração: https://repl.it/repls/VoluminousGrimCaracal
 */

require_once('serial.class.php');

$serial_A = new Serial;
echo $serial_A->get() . "\n";
echo $serial_A->get() . "\n";
echo $serial_A->get() . "\n\n";

$serial_B = new Serial;
echo $serial_B->get() . "\n";
echo $serial_B->get() . "\n\n";

$serial_C = new Serial;
echo $serial_C->get() . "\n";
echo $serial_C->get() . "\n";
echo $serial_C->get() . "\n";
echo $serial_C->get() . "\n\n";
