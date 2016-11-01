angular.module('myApp')
    .controller('ProfilCtrl', function($scope, UsersService, $timeout, $location, $routeParams, localStorageService){
        let id = $routeParams.id

        $scope.show = UsersService.query({users : id})

        $scope.update = function(){
            console.log(this.monimage)
            console.log(this.monImageFile)
            if(this.monImageFile != this.monimage){
                UsersService.update(
                    {users : id}, 
                    {
                        email : this.email,
                        nom : this.nom,
                        prenom : this.prenom,
                        date_naissance : this.date_naissance.substring(0, 10),
                        avatar : this.avatar,
                        monImageFile : this.monimage,
                        monimage : this.monimage,
                        choixImage : this.choixImage
                    }
                )
                $('.success_mess').addClass('success')
                $('.success').html('Votre profil à bien été modifier').fadeIn()

                $timeout(function(){
                    $('.success_mess').fadeOut()
                }, 3000)
                //$location.path('/commentaire')
            }else{
                console.log(this.monimage)
                console.log(this.monImageFile)
                UsersService.update(
                    {users : id}, 
                    {
                        email : this.email,
                        nom : this.nom,
                        prenom : this.prenom,
                        date_naissance : this.date_naissance.substring(0, 10),
                        avatar : this.avatar,
                        choixImage : this.choixImage
                    }
                )
                $('.success_mess').addClass('success')
                $('.success').html('Votre profil à bien été modifier').fadeIn()

                $timeout(function(){
                    $('.success_mess').fadeOut()
                }, 3000)
                //$location.path('/commentaire')               
            }
        }
    })