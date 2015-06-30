(function(angular) {
    function ShippingController($scope) {
        var self = this;

        var init = function() {
            self.user = {
                shippingType: $scope.main.user.shippingType ? $scope.main.user.shippingType : 'normal',
            }
        };

        this.updateModel = function() {
            $scope.main.user = angular.extend($scope.main.user, this.user);
        }

        this.back = function() {
            $scope.main.back();
        }

        this.forward = function() {
            self.updateModel();
            $scope.main.forward();
        }

        init();
    }

    angular.module('shopping')
        .controller('ShippingController', ShippingController);
})(window.angular);