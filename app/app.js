let app = angular.module('myApp', ['ngRoute', 'ngResource', 'ngAnimate', 'LocalStorageModule'])

/**
 * Routing
 */
app.config(function($routeProvider){
    $routeProvider
        .when('/', {templateUrl : 'app/views/partials/login.html', controller : 'LoginCtrl'})

        .when('/register', {templateUrl : 'app/views/partials/register.html', controller : 'RegisterCtrl'})
        
        .when('/profil/:id', {templateUrl : 'app/views/partials/profil.html', controller : 'ProfilCtrl'})
        
        .when('/changePassword/:id', {templateUrl : 'app/views/partials/changePassword.html', controller : 'ChangePasswordCtrl'})
        
        .when('/commentaire', {templateUrl : 'app/views/partials/commentaires.html', controller : 'CommentairesCtrl'})
        
        .when('/show/:id', {templateUrl : 'app/views/partials/show.html', controller : 'CommentaireCtrl'})

        .when('/tutoSass', {templateUrl : 'app/views/partials/tutoSass.html', controller : 'TutoSassCtrl'})

        .otherwise({redirectTo:'/'})
})
.config(function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('myApp')
})