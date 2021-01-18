$(document).ready(function () {
    $.getJSON("./noticias/noticias.json", function (listaNoticias) {
        $.each(listaNoticias, function (index, noticia) {
            if (index < 5) {
                var cuerpoHTML = '<div id="noticia-' + index + '" class="bg-gray-400 px-5">';
                cuerpoHTML += '<div><img id="Imagen' + index + '" src="' + noticia.foto + '" alt="Imagen de una noticia" class="img-fluid px-3 px-sm-4 mt-3 mb-4"/>';
                cuerpoHTML += '<div class="h6 small">' + noticia.fecha + '</div>';
                cuerpoHTML += '</div><div>';
                cuerpoHTML += '<a class="h4 text-primary" href="noticia' + index + '.html">'+ noticia.titulo+'</a>';
                cuerpoHTML += '<div class="pb-5">'+noticia.cuerpo.substring(0,200)+'...</div></div>';
                $("#PageContent").append(cuerpoHTML);
            }
        });
    });
});
//Leemos el archivo noticias.xml
//for each y for 0 --> 4 (5 últimas, nada más)
//Creamos un div y lo insertamos dentro de PageContent