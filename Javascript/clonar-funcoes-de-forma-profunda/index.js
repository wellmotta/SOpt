// Pergunta: https://pt.stackoverflow.com/questions/234896

var cores = {
    Amarelo: function () {}
}
cores.Amarelo.prototype.r = 255;
cores.Amarelo.prototype.g = 255;
cores.Amarelo.prototype.b = 0;

var paletaDaltonica = {};
for (var cor in cores) {
  // Define a objeto
  paletaDaltonica[cor] = function() {};
  // Herda de: cores[cor]()
  paletaDaltonica[cor].prototype = Object.create(cores[cor].prototype);
}

paletaDaltonica.Amarelo.prototype.b = 120;
paletaDaltonica.Amarelo.prototype.teste = 'Testando ...'
console.log(cores.Amarelo.prototype, paletaDaltonica.Amarelo.prototype);


var paletaDaltonicaB = {};
// Define a objeto
paletaDaltonicaB.Amarelo = function() {};
// Herda de: paletaDaltonica.Amarelo
paletaDaltonicaB.Amarelo.prototype = Object.create(paletaDaltonica.Amarelo.prototype);
paletaDaltonicaB.Amarelo.prototype.r = 124;
paletaDaltonicaB.Amarelo.prototype.g = 432;
paletaDaltonicaB.Amarelo.prototype.b = 3472;
paletaDaltonicaB.Amarelo.prototype.teste = 'Valor modificado ...'

cores.Amarelo.prototype.b = 200;
console.log(cores.Amarelo.prototype, paletaDaltonica.Amarelo.prototype, paletaDaltonicaB.Amarelo.prototype);
