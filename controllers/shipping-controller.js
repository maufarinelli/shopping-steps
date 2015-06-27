(function(angular) {
    function ShippingController($scope) {
        var self = this;

        this.updateModel = function() {
            $scope.main.user = this.user;
            
            $scope.main.forward();
        }
    }

    angular.module('shopping')
        .controller('ShippingController', ShippingController);
})(window.angular);