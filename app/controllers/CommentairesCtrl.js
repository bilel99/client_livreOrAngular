angular.module('myApp')
    .controller('CommentairesCtrl', function($scope, CommentaireService){

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
            CommentaireService.save({users_id : '3', content : $scope.content})
            
            get()
            get()
        }

        $scope.editUpdate = function(id){
            $('.edit_content_id_'+id).toggle(400)
            $scope.show = CommentaireService.query({message : id})
        }

        $scope.updateCommentaire = function(){
            CommentaireService.update({message : this.idn}, {content: this.edit})

            get()
            get()
        }

        $scope.deleteCommentaire = function(id){
            CommentaireService.delete({message : id})

            get()
            get()         
        }
    })