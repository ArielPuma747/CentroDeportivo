var miApp = angular.module('miApp', ['ngRoute']);
 

miApp.config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl : "views/registro.html",
        controller : "controllerRegistro"
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