var setores = [
  "Almoxarifado",
  "Controladoria",
  "Administrativo",
  "Tecnologia de Informação" 
];
 
var i = 0;
setores.forEach(function(item){
  i++;
  addOption(i, item);
});

function addOption(i, valor) {
  var option = new Option(valor, i );
  var select = document.getElementById("cmb-setor");
  select.add(option);
}

$(document).ready(function(){
  $('#cmb-setor').trigger("chosen:updated");
  $('#cmb-setor').chosen({
    allow_single_deselect: true
  });
  
  $('.btn-save').on('click', function(){
    var id = $('#cmb-setor').val();
    console.log("Setor: "+id);
    if( id == 0 ){
      // Adiciona a classe "required" na div atraves do seletor "class"
      $('div.chosen-container-single').addClass('required');
    } else {
      // Remove a classe "required" na div atraves do seletor "class"
      $('div.chosen-container-single').removeClass('required');
    }
  });
});
