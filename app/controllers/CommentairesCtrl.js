angular.module('myApp')
    .controller('CommentairesCtrl', function($scope, CommentaireService, $timeout){

        /*function get(){
            let query = CommentaireService.query()
            query.$promise.then(function(data){
                $scope.commentaire = data
            })
        }
        setInterval(get, 1000)*/

        function get(){
            let query = CommentaireService.query()
            query.$promise.then(function(data){
                $scope.commentaire = data
            })
        }
        get()

        $scope.addCommentaire = function(){
            if($scope.content === undefined || $scope.content === ''){
                $('.error_mess').addClass('error')
                $('.error').html('Le champ "commentaire" est vide :-(').fadeIn()

                $timeout(function(){
                    $('.error_mess').fadeOut()
                }, 3000)
            }else{
                $scope.insert = CommentaireService.save({users_id : '3', content : $scope.content})
                
                $scope.insert.$promise.then(function(data){
                    $('.success_mess').addClass('success')
                    $('.success').html(data.Message).fadeIn()
                })

                $timeout(function(){
                    $('.success_mess').fadeOut()
                }, 3000)
                
                get()
                get()
            }
        }

        $scope.editUpdate = function(id){
            $('.edit_content_id_'+id).toggle(400)
            $scope.show = CommentaireService.query({message : id})
        }

        $scope.updateCommentaire = function(){
            if(this.edit === undefined || this.edit === ''){
                $('.error_mess').addClass('error')
                $('.error').html('Le champ "commentaire" est vide :-(').fadeIn()

                $timeout(function(){
                    $('.error_mess').fadeOut()
                }, 3000)
            }else{
                CommentaireService.update({message : this.idn}, {content: this.edit})

                $('.success_mess').addClass('success')
                $('.success').html('Votre message à bien été modifier').fadeIn()

                $timeout(function(){
                    $('.success_mess').fadeOut()
                }, 3000)

                get()
                get()
            }
        }

        $scope.deleteCommentaire = function(id){
            CommentaireService.delete({message : id})

            $('#comment_'+id).fadeOut()

            $('.success_mess').addClass('success')
            $('.success').html('Votre message à bien été supprimer').fadeIn()

            $timeout(function(){
                $('.success_mess').fadeOut()
            }, 3000) 
        }
    })