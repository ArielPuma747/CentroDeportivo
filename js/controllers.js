miApp.controller("mainController", function mainController($scope, $http, $location) {  
    $scope.usuario = {};
    $scope.valido = "FALSE";

    getClients();//carga la variable clients con todos los datos de la base de datos

    $scope.registrarUsuario = function(){
        $location.url("/registrarUsuario");
    }

    //validar usuario existente
    $scope.validarUsuario = function(){
        var datos = $scope.usuarios;
        var nombreUsuario = $scope.usuario.nombreUsuario;
        var contrasena = $scope.usuario.password;
        var respuesta = "FALSE"
        for (var i = 0; i < datos.length; i++) {
            if(nombreUsuario == datos[i].nombre && contrasena == datos[i].carnet){
                respuesta = "TRUE";
                $location.url("/registrar");
            }
        }

        //$scope.valido = respuesta; 
    };

    $scope.mostrar = function(){
        var datos = $scope.usuarios;
        $scope.vista = datos;
    }

    //obtener todos los clientes
    function getClients(){
        $http.get('/usuarios')
        .success(function(data) {
            $scope.usuarios = data;
            console.log(data)
        })
        .error(function(data) {
            console.log('Error: ' + data);
        }); 
    };
});

miApp.controller("registroController", function registroController($scope, $http) {  
    getClients();
    // Create Client
    $scope.createClient = function(){
        $http.post('/usuarios', $scope.usuario)
        .success(function(data) {
            $scope.usuario = {};
            getClients();
        })
        .error(function(data) {
            console.log('Error:' + data);
        });
    };

    function getClients(){
        $http.get('/usuarios')
        .success(function(data) {
            $scope.usuarios = data;
            console.log(data)
        })
        .error(function(data) {
            console.log('Error: ' + data);
        }); 
    };
});

/*
    // Delete Client
    $scope.deleteClient = function(id) {
        $http.delete('/usuarios/' + id)
        .success(function(data) {
            getClients();
        })
        .error(function(data) {
            console.log('Error:' + data);
        });
    };

    */