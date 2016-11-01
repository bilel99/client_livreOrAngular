angular.module('myApp')
    .factory('UsersService', function($resource){
        let data = $resource('http://localhost:8080/webservice/users/:users',
        {users : '@users'}, 
        {
            update : {method : 'PUT'}
        })
        
        return data
    })