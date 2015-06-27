(function(angular) {
    function PersonalInfoController($scope) {
        var self = this;

        this.updateModel = function() {
            $scope.main.user = this.user;
            
            $scope.main.forward();
        }
    }

    angular.module('shopping')
        .controller('PersonalInfoController', PersonalInfoController);
})(window.angular);