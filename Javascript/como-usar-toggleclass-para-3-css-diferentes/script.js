$(document).ready(function(){
    $('#abre').on('click' , function(){ // abre tudo
        $('.titulo .conteudo').show();
    });
    $('#fecha').on('click' , function(){ // fecha tudo
        $('.titulo .conteudo').hide();
    });
    $('.titulo').on('click' , function(){ // abre/fecha cada titulo
        var id = $(this).attr('id');
        $('#tit'+id).toggle();
        $(this).toggleClass(function() {
            // Altera a classe CSS
            return $(this).is('.red, .green') ? 'red green' : 'red';
        });
    });
});
