$(document).ready(function () {
    $.getJSON("./documentos/noticias.json", function (listaNoticias) {

        $.each(listaNoticias, function (index, noticia) {
            var cuerpoHTML = '<div id="noticia-' + index + '" class="px-2 py-2">';
            cuerpoHTML += '<div class="bg-gray-200">'
            cuerpoHTML += '<div><img id="Imagen' + index + '" src="' + noticia.foto + '" alt="Imagen de una noticia" class="img-fluid px-3 px-sm-4 mt-3 mb-4"/>';
            cuerpoHTML += '<div class="h6 small text-black-50">' + noticia.fecha + '</div>';
            cuerpoHTML += '</div><div>';
            cuerpoHTML += '<a class="h4 text-primary" href="noticia' + index + '.html">' + noticia.titulo + '</a>';
            cuerpoHTML += '<div class="pb-5 text-black-50">' + noticia.cuerpo.substring(0, 200) + '...</div></div></div>';
            $('.agregaNoticia').append(cuerpoHTML);

        });
    });
});
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
//    var location =window.location.pathname;
//    var res = location.split("/");
//    var loc = res[res.length-2]
//    if(loc == "public_html"){
//        $.getJSON("./documentos/noticias.json", function (listaNoticias) {
//            $.each(listaNoticias, function (index, noticia) {
//                if (index < 5) {
//                    var cuerpoHTML = '<div id="noticia-' + index + '" class="bg-gray-400 px-5">';
//                    cuerpoHTML += '<div><img id="Imagen' + index + '" src="' + noticia.foto + '" alt="Imagen de una noticia" class="img-fluid px-3 px-sm-4 mt-3 mb-4"/>';
//                    cuerpoHTML += '<div class="h6 small">' + noticia.fecha + '</div>';
//                    cuerpoHTML += '</div><div>';
//                    cuerpoHTML += '<a class="h4 text-primary" href="noticia' + index + '.html">' + noticia.titulo + '</a>';
//                    cuerpoHTML += '<div class="pb-5">' + noticia.cuerpo.substring(0, 200) + '...</div></div>';
//                    $("#PageContent").append(cuerpoHTML);
//                }
//            });
//        });
//    }
//    else{
//        $.getJSON("../documentos/noticias.json", function (listaNoticias) {
//            $.each(listaNoticias, function (index, noticia) {
//                if (index < 5) {
//                    var cuerpoHTML = '<div id="noticia-' + index + '" class="bg-gray-400 px-5">';
//                    cuerpoHTML += '<div><img id="Imagen' + index + '" src="' + noticia.foto + '" alt="Imagen de una noticia" class="img-fluid px-3 px-sm-4 mt-3 mb-4"/>';
//                    cuerpoHTML += '<div class="h6 small">' + noticia.fecha + '</div>';
//                    cuerpoHTML += '</div><div>';
//                    cuerpoHTML += '<a class="h4 text-primary" href="noticia' + index + '.html">' + noticia.titulo + '</a>';
//                    cuerpoHTML += '<div class="pb-5">' + noticia.cuerpo.substring(0, 200) + '...</div></div>';
//                    $("#PageContent").append(cuerpoHTML);
//                }
//            });
//        });
//    }
});

function comprobar() {
    var dni = document.initSesion.userID.value;
    var pass = document.initSesion.userPassword.value;
    var div = document.getElementById("error");
    var msgError = '<div class="small text-danger col-6" id="error">Usuario o contrase&ntilde;a incorrecto.</div>';
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
    if (!div) {
        $("#divPass").append(msgError);
    } else {
        div.innerHTML = 'Contrase&ntilde;a incorrecta.';
    }
    return false;
}

function irAsignaturas() {
    //Lee el parámetro user
    //Si user != null -> window.location.href = "./asignaturas.html?usu=" + user_id;
    var query = window.location.search.substring(1);
    var userID = query.split("=");
    window.location.href = "./asignaturas.html?usu=" + userID[1];
}

function desplegables(asig) {
    var div = document.getElementById("asignaturas");
    var query = window.location.search.substring(1);
    var userID = query.split("=");


    var divIn2 = document.getElementById("desplegablesDEW");
    divIn = document.getElementById("DEW");
    if (divIn2) {
        divIn.removeChild(divIn2);
    }
    divIn2 = document.getElementById("desplegablesIAP");
    divIn = document.getElementById("IAP");
    if (divIn2) {
        divIn.removeChild(divIn2);
    }
    divIn2 = document.getElementById("desplegablesDCU");
    divIn = document.getElementById("DCU");
    if (divIn2) {
        divIn.removeChild(divIn2);
    }

    var incluirHTML = '<div id="desplegables' + asig + '" class="container-fluid px-3"><div class="bg-dark">\n\
                        <div class="px-3 pt-3">\n\
                            <a href="noticiasAsignatura.html?usu=' + userID[1] + '" class="col-12 d-inline-block btn btn-dark bg-gray-500 border-0 shadow p-4">\n\
                                <i class="fas fa-circle float-left"></i>\n\
                                <span class="strong">&Uacute;ltimas noticias</span>\n\
                            </a>\n\
                        </div>'
    incluirHTML += '<div class="px-3 pt-3">\n\
                            <a href="tareas.html?usu=' + userID[1] + '" class="col-12 d-inline-block btn btn-dark bg-gray-500 border-0 shadow p-4">\n\
                                <i class="fas fa-circle float-left"></i>\n\
                                <span class="strong">Tareas</span>\n\
                            </a>\n\
                        </div>'
    incluirHTML += '<div class="px-3 pt-3">\n\
                            <a href="examenesAsignatura.html?usu=' + userID[1] + "&asig=" + asig + '" class="col-12 d-inline-block btn btn-dark bg-gray-500 border-0 shadow p-4">\n\
                                <i class="fas fa-circle float-left"></i>\n\
                                <span class="strong">Ex&aacute;menes</span>\n\
                            </a>\n\
                        </div>'
    incluirHTML += '<div class="px-3 pt-3">\n\
                            <a href="lista-profes.html?usu=' + userID[1] + '" class="col-12 d-inline-block btn btn-dark bg-gray-500 border-0 shadow p-4">\n\
                                <i class="fas fa-circle float-left"></i>\n\
                                <span class="strong">Profesorado</span>\n\
                            </a>\n\
                        </div>'
    incluirHTML += '<div class="p-3">\n\
                            <a href="horarioAsignatura.html?usu=' + userID[1] + '" class="col-12 d-inline-block btn btn-dark bg-gray-500 border-0 shadow p-4">\n\
                                <i class="fas fa-circle float-left"></i>\n\
                                <span class="strong">Horarios</span>\n\
                            </a>\n\
                        </div>\n\
                    </div></div>';
    $("#" + asig).append(incluirHTML);


}

function irIndex() {
    var query = window.location.search.substring(1);
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
function getNotas() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var usuario = urlParams.get("usu");
    var asignatura = urlParams.get("asig");
    console.log(usuario);
    console.log(asignatura);
    var url = "http://localhost:8081/alumno/" + usuario + "/expediente";
    alert(url);
    $.ajax({
        type: "GET",
        url: url,
        dataType: "xml",
        success: function (result) {
            var existe = false;
            var users = result.getElementsByTagName("Notas")[0].getElementsByTagName("Asignatura");
            if (users.length > 0) {
                for (var i = 0; i < users.length; i++) {
                    if (users[i].getElementsByTagName("Acronimo")[0].innerHTML == asignatura) {
                        var existe = true;
                        var notas = document.getElementsByName("notas");
                        for (var j = 0; j < notas.length; j++) {
                            notas[j].innerHTML = users[i].getElementsByTagName("Nota")[0].innerHTML;
                        }
                    }
                }
            }
            if (existe == false) {
                alert("Esta asignatura no tiene notas");
            }
            body.appendChild(tabla);
        },
        error: function (jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Error, puede que alguno de los datos de la BD sea incorrecto';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            alert(msg);
        },
    });
}
;
