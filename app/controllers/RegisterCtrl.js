angular.module('myApp')
    .controller('RegisterCtrl', function($scope, UsersService, $timeout, $location){
        $scope.register = function(){
            if($scope.email === undefined || $scope.email === ''
            && $scope.nom === undefined || $scope.nom === ''
            && $scope.prenom === undefined || $scope.prenom === ''
            && $scope.date_naissance === undefined || $scope.date_naissance === ''
            && $scope.password === undefined || $scope.password === ''
            && $scope.password_two === undefined || $scope.password_two === ''
            ){
                $('.error_mess').addClass('error')
                $('.error').html('Tous les champ sont obligatoire :-(').fadeIn()

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
                    $scope.insert = UsersService.save(
                        {
                            email : $scope.email,
                            nom : $scope.nom,
                            prenom : $scope.prenom,
                            date_naissance : $scope.date_naissance,
                            password : $scope.password
                        }
                    )

                    $scope.insert.$promise.then(function(data){
                        $('.success_mess').addClass('success')
                        $('.success').html(data.Message).fadeIn()

                        $timeout(function(){
                            $('.success_mess').fadeOut()
                        }, 3000)
                    })
                    $location.path('/')
                }
            }
        }
    })