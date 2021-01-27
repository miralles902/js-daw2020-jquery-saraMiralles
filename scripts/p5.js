$(function () {
  setTimeout(function () {
    //creem una funcio per a indicar un interval de temps
    result = confirm("Vol ordenar les paraules?"); //preguntem amb confirm si volem ordenar les paraules
    if (result == true) {
      var $listaOrdenada = $("ul > li").toArray(); //convertim en array
      var $auxLista = $listaOrdenada; //guardem la llista en una variable auxiliar
      $($listaOrdenada).remove(); //borrem la llista
      $auxLista.sort((a, b) => {
        // Comparem el contingut dels elements
        return a.textContent.localeCompare(b.textContent);
    });
    $('ul').append($auxLista); //tornem a imprimir la llista
    }
  }, 3000); //3 segons
});
