// https://pt.stackoverflow.com/questions/234462

// Apenas para exemplo.
// Criamos o objeto RefreshAgenda, e adicionamos as propriedades ( Horários e Páginas ).
// Você pode adicionar quantos quiser, seguindo a mesma estrutura.
var RefreshAgenda = {
  '4:50:0': 'http://uol.com.br',
  '5:50:0': 'https://pt.stackoverflow.com/'
};

function atualizaPagina(){
  momentoAtual = new Date();
  hora = momentoAtual.getHours();
  minuto = momentoAtual.getMinutes();
  segundo = momentoAtual.getSeconds();

  horaAtual = hora + ":" + minuto + ":" + segundo;
  // Verifica se objeto RefreshAgenda contém o índice horaAtual
  if(RefreshAgenda[horaAtual]){
    console.log(horaAtual + " Redirecionando para.: " + RefreshAgenda[horaAtual]);
    window.location.href= RefreshAgenda[horaAtual];
  }
  setTimeout(atualizaPagina, 1000);
}
atualizaPagina();
