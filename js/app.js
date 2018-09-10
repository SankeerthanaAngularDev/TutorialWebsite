var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/SignIn", {
            templateUrl: "views/login.html",
            controller: ""
        })
        .when("/SignUp", {
            templateUrl: "views/signup.html",
            controller: ""
        })
        .when("/Home", {
            templateUrl: "views/main.html",
            controller: ""
        });
});
