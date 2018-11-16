// requiero paquetes principales
//var http = require('http');
var express = require('express');
var aplicacion = express(); // inicializo la aplicacion

// seteo PUG, el gestor de vistas
var pug = require('pug');
aplicacion.set("views", "./vistas"); //ruta en donde estan las vistas
aplicacion.set("view engine", "pug");

// finalmente requerimos nuestro modulo para hacer consultas
//var mod_consulta = require("./modelo/consulta.js");
var controlador = require("./controlador/controlador_consultas");
//var acceso_directo_a_la_base_de_datos = require("./modelo/consulta.js")


// ---------------- enrutamiento -----------------
// get("/") es cuando entramos a localhost:3000
aplicacion.get("/", function (pedido,respuesta) {
  respuesta.render("index_pug");
});
// post("/") es cuando clickeamos el boton submit de la vista
aplicacion.post("/", function (pedido,respuesta) {
  /*var resultado = controlador.resolver_peticion(pedido);
  respuesta.render(
    "respuesta_pug",
    {resConsulta: JSON.stringify(resultado)}
  );
*/

  controlador.resolver_peticion('esto no hace nada').then(
    resultado =>
    respuesta.render("respuesta_pug", {resConsulta: JSON.stringify(resultado)})
  )
});

// por ultimo pongo al servidor a escuchar en el puerto 3000
console.log("---app funcionando---");
aplicacion.listen(3000);
