function hola() {
    alert("hola caracola");
}

$(document).ready(function () {

    $.getJSON("./documentos/noticias.json", function (listaNoticias) {
        $.each(listaNoticias, function (index, noticia) {
            if (index < 5) {
                var cuerpoHTML = '<div id="noticia-' + index + '" class="px-2 py-2">';
                cuerpoHTML += '<div class="bg-gray-200">'
                cuerpoHTML += '<div><img id="Imagen' + index + '" src="' + noticia.foto + '" alt="Imagen de una noticia" class="img-fluid px-3 px-sm-4 mt-3 mb-4"/>';
                cuerpoHTML += '<div class="h6 small text-black-50">' + noticia.fecha + '</div>';
                cuerpoHTML += '</div><div>';
                cuerpoHTML += '<a class="h4 text-primary" href="noticia' + index + '.html">' + noticia.titulo + '</a>';
                cuerpoHTML += '<div class="pb-5 text-black-50">' + noticia.cuerpo.substring(0, 200) + '...</div></div></div>';
                $("#PageContent").append(cuerpoHTML);
            }
        });
    });
});

function comprobar() {
    var dni = document.initSesion.userID.value;
    var pass = document.initSesion.userPassword.value;
    var div = document.getElementById("error");
    var msgError = '<div class="small text-warning col-6" id="error">Usuario o contrase&ntilde;a incorrecto.</div>';
    $.getJSON("./documentos/usuarios.json", function (listaNoticias) {
        $.each(listaNoticias, function (index, usuario) {
            console.log(usuario.id);
            console.log(usuario.password);
            if (dni == usuario.id) {
                if (pass == usuario.password) {
                    window.location.href = "./alumnos.html?usu=" + usuario.id;
                    return true;
                }
            } else {
                if (!div) {
                    $("#divPass").append(msgError);
                } else {
                    div.innerHTML = 'Contrase&ntilde;a incorrecta.';
                }
                return false;
            }
        });
    });

}

function irAsignaturas(){
    //Lee el parámetro user
    //Si user != null -> window.location.href = "./asignaturas.html?usu=" + user_id;
    var query = window.location.search.substring(1);
    var userID = query.split("=");
    window.location.href = "./asignaturas.html?usu=" + userID[1];
}

function desplegables(){
    var div = document.getElementById("asignaturas");
    
}

function irIndex() {var query = window.location.search.substring(1);
    var userID = query.split("=");
    window.location.href = "./index.html?usu=" + userID[1];
}

function irAlumnos() {
    var query = window.location.search.substring(1);
    var userID = query.split("=");
    window.location.href = "./alumnos.html?usu=" + userID[1];
}

function recuperarContrasena() {
    alert("Felicidades, has llegado hasta el fin de esta implementación. De ser una aplicación real, este botón serviría de algo, pero como esto no va de correos y contraseñas, sino de hacer un buen front-end, pues aquí nos hemos quedado :)");
    return false;
}
//Leemos el archivo noticias.xml
//for each y for 0 --> 4 (5 últimas, nada más)
//Creamos un div y lo insertamos dentro de PageContent