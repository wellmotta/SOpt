 var handle = $( "#custom-handle" );
    $( "#slider" ).slider({
      create: function() {
        handle.text( 'total ' + $( this ).slider( "value" ) + '%' );
      },
      slide: function( event, ui ) {
        handle.text( 'total ' + ui.value + '%' );
        // Verifique o valor atual
        // Aqui eu define que ser for menor que
        // 50 ele altera a margin da esquerda para -1px
      	if (ui.value < 50) {
        	$("#custom-handle").css({
          	'margin-left': '-1px'
          });
        } else {
          // Caso for maior, define como -101px
          $("#custom-handle").css({
          	'margin-left': '-101px'
          });
        }
      }
    });
  } );
