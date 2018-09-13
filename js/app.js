var app = angular.module("myApp", ["ngRoute", "ui.bootstrap"]);


app.config(function ($routeProvider) {
    $routeProvider
        .when("/SignIn", {
            templateUrl: "views/login.html",
            controller: "LoginCntrl"
        })
        .when("/SignUp", {
            templateUrl: "views/signup.html",
            controller: ""
        })
        .when("/Home", {
            templateUrl: "views/main.html",
            controller: "CarouselCtrl"
        });
});
