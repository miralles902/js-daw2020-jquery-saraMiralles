$(function () {
  let $switcher = $(".switcher"); //variable cache per a trobar switcher
  let $botones = $(".switcher").children("button"); //utilitzem children perque esta un nivell per baix en vez de find
  let $agregarBotones = [
    //creem un array amb 3 botons
    $('<button data-style="default">Default</button>'),
    $('<button data-style="narrow">Narrow Column</button>'),
    $('<button data-style="large">Large Print</button>'),
  ];
  let $principal = $("main");

  //inicialment:Esborrar els botons que venen per defecte a l'HTML
  $botones.remove(); //eliminem els botons

  //Afegir tres botons amb els noms: Defecto (estil default), Estrecho (estil narrow), Grande (estil large).
  $($agregarBotones).each(function (indice, elemento) {
    $switcher.append(elemento);
  });
  let $newBotones = $(".switcher").children("button"); //tenia que tornar a guardarlos

  //Ocultar d'inici els botons d'estils.
  $newBotones.hide();

  //Que el botó "Defecto" estiga seleccionat (estil negreta), al entrar per primera vegada.
  let $defecto = $(".switcher").children("button").eq(0);
  $defecto.addClass("selected");

  //canviar el color de fons
  $switcher.hover(
    function () {
      //entre
      //Quan el ratolí entre dins del "canviador d'estils"  el fons canviarà a verd (classe: "hover")
      $(this).addClass("hover");
    },
    function () {
      //ixc
      //Quan el ratolí isca del "canviador d'estils, el fons es restaurarà al valor inicial/per defecte.
      $(this).removeClass();
      $(this).addClass("switcher");
    }
  );

  //Quan es clique dins del "canviador d'estils", es mostraran els botons amb els estils disponibles
  $($switcher).on("click", function (evento) {
    evento.preventDefault();
    $newBotones.slideToggle();
  });

  //Narrow
  let $narrow = $(".switcher").children("button").eq(1);

  $narrow.on("click", function (evento) {
    evento.stopPropagation(); //per a evitar que fasa el efecte de slidetoggle
    //S'aplicarà l'estil a tot el "main"
    if ($principal.hasClass("large")) {
      $($principal).removeClass("large");
    } else {
      $($principal).addClass("narrow");
    }

    //Hi ha una classe "selected", que fica en negreta un text.
    //Doncs volem aplicar aquesta classe al botó que tinga l'estil seleccionat. La resta de botons no eixiran en negreta.
    $("button").removeClass("selected"); //eliminem la clase añadida
    $(this).toggleClass("selected"); //li indiquem que seleccione la clase que hem clickat
  });

  //large
  let $large = $(".switcher").children("button").eq(2);

  $large.on("click", function (evento) {
    evento.stopPropagation(); //per a evitar que fasa el efecto de slidetoggle
    //S'aplicarà l'estil a tot el "main"
    if ($principal.hasClass("narrow")) {
      $($principal).removeClass("narrow");
    } else {
      $($principal).addClass("large");
    }
    //Hi ha una classe "selected", que fica en negreta un text.
    //Doncs volem aplicar aquesta classe al botó que tinga l'estil seleccionat. La resta de botons no eixiran en negreta.
    $("button").removeClass("selected"); //eliminem la clase añadida
    $(this).toggleClass("selected"); //li indiquem que seleccione la clase que hem clickat
  });

  //default
  $defecto.on("click", function (evento) {
    evento.stopPropagation(); //per a evitar que fasa el efecto de slidetoggle
    //S'aplicarà l'estil a tot el "main"
    $($principal).removeClass("narrow large"); //borrado multiple
    //Hi ha una classe "selected", que fica en negreta un text.
    //Doncs volem aplicar aquesta classe al botó que tinga l'estil seleccionat. La resta de botons no eixiran en negreta.
    $("button").removeClass("selected"); //eliminem la clase añadida
    $(this).toggleClass("selected"); //li indiquem que seleccione la clase que hem clickat
  });
});
