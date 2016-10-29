angular.module('myApp')
    .factory('CommentaireService', function($resource){
        let data = $resource('http://localhost:8080/webservice/messages/:message', 
            {message : '@message'}, 
            { update : 
                { method : 'PUT' } 
            })
        return data
    })