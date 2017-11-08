// Pergunta: https://pt.stackoverflow.com/questions/253379
// Demonstração: http://jsbin.com/lotudacoxi/edit?output

// Por Cidade
// Coloque somente os 5 primeiros digitos, exe:
// Campinas os CEPs tem a númeração començando por
// 13000 e vai até 13139
const abrange = [
  // CAMPINAS
  {
  	inicio: 13000,
    fim: 13139,
    cidade: 'Campinas'
  },
	// PAULINIA
  {
  	inicio: 13140,
    fim: 13140,
    cidade: 'Paulinia'
  },
  // COSMOPOLIS
  {
    inicio: 13150,
    fim: 13150,
    cidade: 'Cosmopolis'
  }
];

$("#cep").on('keyup', function(e) {
  var campo = $(this);
  var check = false;
  // Verifica a quantidade de digitos
  if (campo.val().length < 8) return;
  var url = 'https://viacep.com.br/ws/${cep}/json/'.replace('${cep}', campo.val());
  
  $.getJSON(url, function (retorno) {
    if (retorno.erro) {
      $(".success, .info").hide();
      $(".erro").show();
    } else {
      var ini = retorno.cep.substring(0, 5);
      var t = $.grep(abrange, function(cep, i){
        if(ini >= cep.inicio && ini <= cep.fim) {
          check = true;
        }
      });
      
      if (check) {
        $(".erro, .info").hide();
        $(".success").show();
      } else {
        $(".erro, .success").hide();
        $(".info").show();
      }
    }
    console.log(retorno);
  });
});
