$(function() {
$('body').find('p').on('click',function(evento){
    evento.preventDefault();
    let separadorEsp = (' ');
    let separadorPunt = ('.');
var textos = $('body').find('p');
var separarTexto = textos.split(separadorEsp);
var separarTexto2 = textos.split(separadorPunt);

$(this).css('background-color','yellow','font-weight','bold');
$(this).css('font-weight','bold');
});

});