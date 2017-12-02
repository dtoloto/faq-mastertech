Exemplo de consulta de api em IONIC CREATOR 


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


*/