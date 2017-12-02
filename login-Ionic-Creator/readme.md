# login-Ionic-creator

Logando com Ionic Creator 
#############################
                              Controller 
                              #############################
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
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

}

#############################
############################# Controller 
                              #############################
#############################
