(function(angular) {
    function PersonalInfoController($scope) {
        var self = this;

        var init = function() {
            this.user = {
                name: $scope.main.user.name ? $scope.main.user.name : '',
                email: $scope.main.user.email ? $scope.main.user.email : '', 
                phone: $scope.main.user.phone ? $scope.main.user.phone : '',
                address: $scope.main.user.address ? $scope.main.user.address : ''
            }
        };

        this.updateModel = function() {
            $scope.main.user = this.user;
            
            $scope.main.forward();
        }
    }

    angular.module('shopping')
        .controller('PersonalInfoController', PersonalInfoController);
})(window.angular);