(function(angular) {
    function shipping() {
        return {
            restrict: 'E',
            require: '^main',
            controllerAs: 'shipping',
            controller: 'ShippingController'
        }
    }

    angular.module('shopping')
        .directive('shipping', shipping);
})(window.angular);