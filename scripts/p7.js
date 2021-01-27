$(function () {
    $('button').click('boton1', function(e){
        e.preventDefault();
        $("select").remove(); //borramos el select
        var $opcion = $('<select><option value="blanco">Blanco</option></select>');
        $("body").before($opcion); //lo añadimos antes del boton
    });
  });