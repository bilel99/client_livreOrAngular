let app = angular.module('myApp', ['ngRoute', 'ngResource', 'ngAnimate', 'LocalStorageModule'])

/**
 * Routing
 */
app.config(function($routeProvider){
    $routeProvider
        .when('/', {templateUrl : 'app/views/partials/login.html', controller : 'LoginCtrl'})
        .when('/commentaire', {templateUrl : 'app/views/partials/commentaires.html', controller : 'CommentairesCtrl'})
        .when('/show/:id', {templateUrl : 'app/views/partials/show.html', controller : 'CommentaireCtrl'})

        .otherwise({redirectTo:'/'})
})
.config(function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('myApp')
})