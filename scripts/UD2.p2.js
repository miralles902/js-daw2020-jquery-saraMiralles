$(function() {
let $switcher = $('.switcher');
let $botones = $('.switcher').children('button').data('style');

//$botones.remove();

$switcher.hover(function(){
//entro
$(this).addClass('hover');
}, function(){
//salgo
$(this).removeClass();
$(this).addClass('switcher');
}); 

});