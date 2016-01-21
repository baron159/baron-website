(function(){
    var app = angular.module("ContentDir", []);
    
    app.directive("websiteIntent", function(){
        return{
            restrict: 'E',
            templateUrl: 'intent.html'
        };
    });
    
    app.directive("websiteSchooling", function(){
        return{
            restrict: 'E',
            templateUrl: 'test.html'
        };
    });
    
    app.directive("websiteWork", function(){
        return{
            restrict: 'E',
            templateUrl: 'testing.html'
        };
    });
    
    app.directive("websiteAwards", function(){
        return{
            restrict: 'E',
            templateUrl: 'test.html'
        };
    });
    
    app.directive("websiteProjects", function(){
        return{
            restrict: 'E',
            templateUrl: 'testing.html'
        };
    });
    
    app.directive("websiteResume", function(){
        return{
            restrict: 'E',
            templateUrl: 'test.html'
        };
    });
    
    app.directive("websiteContact", function(){
        return{
            restrict: 'E',
            templateUrl: 'testing.html'
        };
    });
    
})();