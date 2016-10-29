let app = angular.module('myApp', ['ngRoute', 'ngResource'])

/**
 * Routing
 */
app.config(function($routeProvider){
    $routeProvider
        .when('/commentaire', {templateUrl : 'app/views/partials/commentaires.html', controller : 'CommentairesCtrl'})
        .when('/show/:id', {templateUrl : 'app/views/partials/show.html', controller : 'CommentaireCtrl'})

        .otherwise({redirectTo:'/commentaire'})
})