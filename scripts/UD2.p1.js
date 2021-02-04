$(function () {
          let span = "<span>"; //creamos etiqueta span
          let $sizePalabra = $('p').html().length; //comprobamos la longitud de dentro de p
          let $texto = $('p').html(); //conseguimos el texto
          let vacia = ""; //cadena vacia, a la que insertaremos el contenido

          for(let i = 0; i < $sizePalabra; i++){ //recorremos

              span += $texto[i]; //añadimos el primer <span>

              if($texto[i] == " "){
                  span += "</span>"; //cerramos la palabra 
                  vacia += span; //asignamos el texto con <span> a la cadena vacia
                  span = "<span>"; //introducimos para insertar la siguiente palabra
              }
          }
          $('p').html(vacia); //introducimos en p la nueva cadena

    $("p").find("span").on("click", function (evento) {
      //al clickar sobre el elemento
      evento.preventDefault(); //evitamos acciones indeseadas
      //hacemos que la palabra (this) tengo el fondo amarillo y este en negrita
      $(this).css({"background-color": "yellow","font-weight": "bold"}); //css multiple  
    });
});
