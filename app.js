// requiero paquetes principales
var http = require('http');
var express = require('express');
var aplicacion = express(); // inicializo la aplicacion

// seteo PUG, el gestor de vistas
var pug = require('pug');
aplicacion.set("views", "./vistas"); //ruta en donde estan las vistas
aplicacion.set("view engine", "pug");

// finalmente requerimos nuestro modulo para hacer consultas
var mod_consulta = require("./modelo/consulta.js");



// ---------------- enrutamiento -----------------
// get("/") es cuando entramos a localhost:3000
aplicacion.get("/", function (pedido,respuesta) {
  respuesta.render("index_pug");
});
// post("/") es cuando clickeamos el boton submit de la vista
aplicacion.post("/", function (pedido,respuesta) {
  mod_consulta.hacer_consulta().then( // hacemos hacer_consulta() y luego una promesa con su resultado
    (resultado) => {
      // con el resultado renderizamos la vista "respuesta_pug"
      // y en el <p> "resConsulta" le asigno el resultado.
      // JSON.stringify es para transformar un objeto en String
      // y la propiedad "rows" del resultado es un array con todas las
      // tuplas resultantes de la consulta (con "0" accedemos a la primer tupla del array)
      respuesta.render("respuesta_pug", {resConsulta: JSON.stringify(resultado.rows[0])})
    }
  );
});

// por ultimo pongo al servidor a escuchar en el puerto 3000
console.log("---app funcionando---");
aplicacion.listen(3000);
