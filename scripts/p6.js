$(function () {
    $('button').click('#button1', function(e){ //al pulsar el boton (addEvenlistener de javascript vanilla)
        e.preventDefault(); //evitamos comportamientos no deseados
        let contar = $('div').eq(1).find('span,p').length;//cuenta cuantos elementos tiene el div
        var $total = $('<p>hay '+contar+' elementos dentro del segundo div</p>'); //añadimos el texto auna variable
        $('div span').eq(2).append($total); //añadimos el texto a la web
    });
  });