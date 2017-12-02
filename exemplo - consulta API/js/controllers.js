angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', '$state', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$http) {
var stringUrl="https://webservices.infoinvest.com.br/cotacoes/cotacoes_handler.asp?&quotes=&quotes=sp.petr4&quotes=sp.itub4&quotes=sp.pcar4&quotes=BR.IBOVESPA&quotes=US.DOLARC";

$scope.cotaoes={}
$scope.cotacao =function(){
    
    console.log("aquiii")
    
    $http({
        method:'GET',
        url:stringUrl
    }).then(function(response){
        $scope.resposta={}
        console.log(response.data)
        $scope.resposta=response.data;
        //success
        //do something with the response
    }, function(response){
        //error
        //show an appropriate message
    });
}
}
// referencias para consultar 
/* 
http://samcroft.co.uk/2016/loading-json-into-an-ionic-app/ # consulta de apis 
http://blog.tiagocrizanto.com/criando-componente-para-exibicao-de-cotacao-de-moedas-e-acoes/ # apis do mercado de acoes 


*/])
   
.controller('cartCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cloudCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state ) {
 $scope.dados={
     user:"",
     senha:"" 
 };
    $scope.login=function(){
        
        console.log($scope.dados)
        // chamar seu back end para autenticar o valor do email e senha
        if($scope.dados.senha=="teste"){
            // se correto encaminhar para home
            $state.go("menu.home")
    
        }else{
            // colocar popup de erro de senha
        }
    }

}])
   
.controller('criarContaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 