angular.module('myApp')
    .controller('LoginCtrl', function($scope, LoginService, $timeout, $location, localStorageService){
        
        $scope.login = function(){
            
            if($scope.email === undefined || $scope.email === '' && $scope.password === undefined || $scope.password === ''){
                $('.error_mess').addClass('error')
                $('.error').html('Tous les champs sont obligatoire :-(').fadeIn()

                $timeout(function(){
                    $('.error_mess').fadeOut()
                }, 3000)
            }else{
                $scope.user = LoginService.save({email : $scope.email, password : $scope.password})
                $scope.user.$promise.then(function(data){
                    if(data.Error == true){
                        $('.error_mess').addClass('error')
                        $('.error').html('Identifiant ou mot de passe incorrect :-(').fadeIn()

                        $timeout(function(){
                            $('.error_mess').fadeOut()
                        }, 3000)
                    }else{
                        localStorageService.set('user', data.Resultat[0])
                        $scope.user = data.Resultat[0]
                        $location.path('/commentaire')
                    }
                })
            }
        }

    })