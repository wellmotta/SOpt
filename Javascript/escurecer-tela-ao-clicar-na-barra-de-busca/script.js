// Pergunta: https://pt.stackoverflow.com/questions/274781
// Quando o campo receber focus.
$('.busca').on('focus', function() {
  // Altera a propriedade z-index
  $(this).css({ 'z-index': 99 });
  // Exibe a overlay
  $('.overlay').fadeIn(1000);
});
// Quando o campo perde o focus.
$('.busca').on('blur', function() {
  // Oculta a overlay
  $('.overlay').fadeOut(1000);
  // Reseta a propriedade z-index
  $(this).css({ 'z-index': 1 });
});
