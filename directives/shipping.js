(function(angular) {
    function shipping() {
        return {
            restrict: 'E',
            require: '^main',
            controllerAs: 'ship',
            controller: 'ShippingController'
        }
    }

    angular.module('shopping')
        .directive('shipping', shipping);
})(window.angular);