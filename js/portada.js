//Comenzando con un evento Onclick
    function abrirNuevaPagina (){
        location.href = "index.html";
}

const nombreUsuario = prompt("Hola! Cómo es tu nombre?");

localStorage.setItem('nombre', nombreUsuario);