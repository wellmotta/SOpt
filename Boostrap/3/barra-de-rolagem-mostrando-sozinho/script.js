$('#myModal .modal-body').on('scroll', function() {
    console.log('scroll y');
});
// oculta o overflow-y
$('#myModal .modal-body').css({
  	'overflow-y': 'hidden'
  });
/// Apenas para simular
setTimeout(function(){
  $(".loader").hide(); // Oculta o loading
  $('#myModal .modal-body').html('<p>Paragrafo</p><p>Paragrafo</p><p>Paragrafo</p><p>Paragrafo</p><p>Paragrafo</p><p>Paragrafo</p><p>Paragrafo</p>');
  // Define o overflow-y como auto
  $('#myModal .modal-body').css({
  	'overflow-y': 'auto'
  })
}, 10000);
