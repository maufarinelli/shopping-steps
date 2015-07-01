(function(angular) {
    function ShippingController($scope) {
        var self = this,
            mainController = $scope.main;

        function init() {
            self.user = {
                shippingType: mainController.user.shippingType ? mainController.user.shippingType : 'normal',
            }
        };

        this.back = function() {
            mainController.updateModel(this.user);
            mainController.back();
        };

        this.forward = function() {
            mainController.updateModel(this.user);
            mainController.forward();
        };

        init();
    }

    angular.module('shopping')
        .controller('ShippingController', ShippingController);
})(window.angular);