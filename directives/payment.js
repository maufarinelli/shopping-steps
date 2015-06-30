(function(angular){
    function payment() {
        return {
            restrict: 'E',
            templateUrl: ''
            controllerAs: 'payment',
            controller: 'PaymentController'
        }
    }

    angular.module('shopping')
        .directive('payment', payment);
})(window.angular);