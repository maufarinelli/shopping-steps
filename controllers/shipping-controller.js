(function(angular) {
    function ShippingController($scope) {
        var self = this;

        var init = function() {
            this.user = {
                shippingType: $scope.main.user.shippingType ? $scope.main.user.shippingType : '',
            }
        };

        this.updateModel = function() {
            $scope.main.user = angular.extend($scope.main.user, this.user);
            
            $scope.main.forward();
        }

        this.back = function() {
            $scope.main.back();
        }

        init();
    }

    angular.module('shopping')
        .controller('ShippingController', ShippingController);
})(window.angular);