$(function() {
/* Punt 1

let $top=$('<a href="#">Back To Top</a>');
$('p:not(div#footer p)').after($top);

*/

//punt 2 $('span.footnote').insertBefore('#footer')
//punt 3 $('span.footnote').wrapAll("<ol></ol>").wrap('<li></li>');

$('span.footnote').insertBefore('#footer').wrapAll("<ol></ol>").wrap('<li></li>');

//punt 1 refet amb insertAfter y prependTo
$('<a href="#">Back To Top</a>').prependTo('body').insertAfter('p:not(div#footer p)');
});