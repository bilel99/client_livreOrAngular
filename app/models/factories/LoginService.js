angular.module('myApp')
    .factory('LoginService', function($resource){
        let data = $resource('http://localhost:8080/webservice/login/:login',
            {login : '@login'}, 
            { update : 
                { method : 'PUT' } 
        })
        return data
    })