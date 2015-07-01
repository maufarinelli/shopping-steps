(function(angular){
    function payment() {
        return {
            restrict: 'E',
            require: '^main',
            controllerAs: 'payment',
            controller: 'PaymentController'
        }
    }

    angular.module('shopping')
        .directive('payment', payment);
})(window.angular);