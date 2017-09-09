// Pergunta: https://pt.stackoverflow.com/questions/235838/
// Resposta: https://pt.stackoverflow.com/a/235848/60376

$(document).ready(function(e) {
    $('#addComp').on('click', function(){
      // Guarda primeiro item na variavel "original"
      var original = $("#item_composicao:eq(0)");
      // Guarda todos os items na variavel "todosSelectes"
      var todosSelects = $("select.composicao");
      // Clona o primeiro item
      var clone = original.clone();
      // Remive os items selecionados anteriormente.
      $('option', clone).filter(function(i) {
        return todosSelects.find('option:selected[value="' + $(this).val() + '"]').length;
      }).remove();
      // Verifica a quantidade de opções que tem o último select
      // Se for maior que 1, clona o elemento, caso for igual a 1
      // não faz nada.
      var ultimo = $("select.composicao:last option").size();
      if (ultimo > 1) {
        $('.itemComposicao').append(clone);
      }
    });
});
