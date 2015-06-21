(function(angular) {
    angular.module('shopping')
        .directive('shoppingMain', function() {
            return {
                restrict: 'E',
                templateURL: 'shopping-main.html',
                replace: true,
                controllerAs: 'main',
                controller: 'ShoppingMainController'
            }
        });
})(window.angular);