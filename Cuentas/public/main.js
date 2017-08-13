angular.module('angularCuenta', []);  
function mainController($scope, $http) {  
    $scope.usuario = {};
     getClients();

    // Create Client
    $scope.createClient = function(){
        $http.post('/api/cuentas', $scope.usuario)
            .success(function(data) {
                $scope.usuario = {};
                getClients();
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };

}