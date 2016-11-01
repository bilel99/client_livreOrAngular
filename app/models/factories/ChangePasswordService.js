angular.module("myApp")
    .factory("ChangePasswordService", function($resource){
        let data = $resource('http://localhost:8080/webservice/changePassword/:id',
            {id : '@id'}, 
            {update : 
                {method : 'PUT'}
            })
        return data
    })