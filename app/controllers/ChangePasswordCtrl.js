angular.module('myApp')
    .controller('ChangePasswordCtrl', function($scope, ChangePasswordService, $timeout, $location, $routeParams, localStorageService){
        // Récupération du localStorage (équivalent à la session)
        $scope.user = localStorageService.get('user')
        let id = $routeParams.id

        $scope.logout = function(){
            localStorageService.clearAll()
            $location.path('/')
        }

        $scope.changePassword = function(){
            if($scope.password === undefined || $scope.password === '' 
            && $scope.password_two === undefined || $scope.password_two === ''){
                $('.error_mess').addClass('error')
                $('.error').html('Le champs password est obligatoire :-(').fadeIn()

                $timeout(function(){
                    $('.error_mess').fadeOut()
                }, 3000)
            }else{
                if($scope.password != $scope.password_two){
                    $('.error_mess').addClass('error')
                    $('.error').html('Les mot de passe doivent être identique !').fadeIn()

                    $timeout(function(){
                        $('.error_mess').fadeOut()
                    }, 3000)
                }else{
                    $scope.update = ChangePasswordService.update({
                        id : id,
                        password : $scope.password
                    })

                    $scope.update.$promise.then(function(data){
                        $('.success_mess').addClass('success')
                        $('.success').html(data.Message).fadeIn()
                    })

                    $timeout(function(){
                        $('.success_mess').fadeOut()
                    }, 3000)
                    $location.path('/commentaire')   
                }
            }
        }
    })