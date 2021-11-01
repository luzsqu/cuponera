//Saludo con prompt y nombre

const saludoUsuario = document.getElementById("nombre-usuario");
const saludo = prompt("Ingresa tu nombre");

saludoUsuario.innerText = saludo;

//Agregar texto a cards con DOM

const tarjeta1 = document.getElementById("descuento-libreria");
const tarjeta2 = document.getElementById("descuento-accesorio");
const tarjeta3 = document.getElementById("descuento-viajes");
const tarjeta4 = document.getElementById("descuento-articulos");
const tarjeta5 = document.getElementById("descuento-papeleria");
const tarjeta6 = document.getElementById("descuento-indumentaria");

tarjeta1.innerText = "Adquiere tus descuentos en libros, manuales y revistas"
tarjeta2.innerText = "Adquiere tus descuentos en accesorios para tu uniforme"
tarjeta3.innerText = "Adquiere tus descuentos en viajes de larga distancia"
tarjeta4.innerText = "Adquiere tus descuentos en articulos para el hogar"
tarjeta5.innerText = "Adquiere tus descuentos en tu papelería escolar"
tarjeta6.innerText = "Adquiere tus descuentos en indumentaria y calzados"


//Array de objetos en stock-revisar

const descuentosEnStock = [
  {id: "libroRevista", nombre: "Libreria", precio: 200},
  {id: "InduMentaria", nombre: "Indumentaria", precio: 500},
  {id: "preViaje", nombre: "Viajes", precio: 1500},
  {id: "artHogar", nombre: "Hogar", precio: 400},
  {id: "artPapeleria", nombre: "Papeleria",  precio: 200},
  {id: "indCalzados", nombre: "Indumentaria",  precio: 700},
]
//Array de objetos en carrito - se usa el let para que permita el vaciado del carrito - pruebon con const para la tabla en dom

const descuentosCarrito = [];

console.log(descuentosCarrito);

//EVENTOS para click en compras 

let boton0 = document.getElementById("btn-descuento-desc0")
      boton0.addEventListener("click", respuestaClick0)
      function respuestaClick0(){
        alert("Producto agregado a tu carrito!");
        productosCarrito.push(descuentosEnStock[0]);
}
      
let boton1 = document.getElementById("btn-descuento-desc1")
      boton1.addEventListener("click", respuestaClick1)
      function respuestaClick1(){
        alert("Producto agregado a tu carrito!");
      }
let boton2 = document.getElementById("btn-descuento-desc2")
      boton2.addEventListener("click", respuestaClick2)
      function respuestaClick2 (){
        alert("Producto agregado a tu carrito!");
      }
let boton3 = document.getElementById("btn-descuento-desc3")
      boton3.addEventListener("click", respuestaClick3)
      function respuestaClick3 (){
        alert("Producto agregado a tu carrito!");
      }
let boton4 = document.getElementById("btn-descuento-desc4")
      boton4.addEventListener("click", respuestaClick4)
      function respuestaClick4 (){
        alert("Producto agregado a tu carrito!");
      }
let boton5 = document.getElementById("btn-descuento-desc5")
      boton5.addEventListener("click", respuestaClick5)
      function respuestaClick5 (){
        alert("Producto agregado a tu carrito!");
      }