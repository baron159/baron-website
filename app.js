(function(){
    var app = angular.module("ScottApp", ["ContentDir"]);
    
    app.controller("tabController", function(){
//This is the init tab that the page will start on
        this.tab = 1;
    //This sets the clicked tab as the current tab
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
    //Used by ng-show to decide with tab is selected
        this.isSelected = function(passedTab){
            return this.tab === passedTab;
        };
        
    });
})();