var miApp = angular.module('miApp', ['ngRoute']);
 

miApp.config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl : "views/login.html",
        controller : "mainController"
    })
      .when("/registrarUsuario", {
        templateUrl : "views/registroUsuario.html",
        controller : "registroController"
    })
      .when("/registrar", {
        templateUrl : "views/registro.html",
        controller : "controllerRegistro"
    })
      .when("/venta", {
        templateUrl : "views/venta.html",
        controller : "controllerVenta"
    })
    .when("/cobrar", {
        templateUrl : "views/cobrar.html",
        controller : "controllerCobrar"
    })


    .otherwise({ reditrectTo : "/" });
})