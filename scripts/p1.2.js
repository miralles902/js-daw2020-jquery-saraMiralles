$(function() {
//**************************** Pràctica 2 - UD1. Selectors *************************************************************************
$('ul#selected-plays > li').addClass('horizontal'); //llista de nivell superior horitzontal
$('ul#selected-plays > li > ul').addClass('sub-level'); //subnivell per als elements fills
$('ul.clear-after > li').addClass('big-letter'); //apliquem estil diferent a la primera lletra
$("li > a[href^='mailto']").addClass('mailto'); //apliquem el estil mailto
$("li > a[href$='pdf']").addClass('pdflink'); //apliquem el estil pdflink
$("li > a[href^='http'], a[href~='henry']").addClass('henrylink'); //apliquem el estil henrylink
//a[href^='http'] --> elemento cuyo valor empieza por..
//a[href$='pdf'] --> elemento que termine en..
//a[href~='henry'] --> elementos que contengan la palabra..

$('table tr:nth-child(odd)').addClass('alt'); //donar estil a la clase anomenada alt
//coloquem nth-child(odd) per a representar la posicio 1,3,5
//si colocarem nth-child(even) representariem les posicions 2,4,6

$('table tr > td:contains("Henry")').addClass('highlight');//resaltem la clase highlight les obres referides a Henry


//**************************** Pràctica 3 - UD1. Navegació pel DOM ******************************************************************
$('table tr > td:contains("Henry")').next().addClass('highlight'); //coloquem en negreta la 2on columna a la diu Henry
$('table:nth-of-type(1) tr > td:contains("et")').nextAll().addClass('highlight');
//coloquem en negreta la 2º y 3º columna que en la primera fila contiga el text "et"
});