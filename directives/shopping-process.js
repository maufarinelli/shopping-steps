(function(angular) {
    angular.module('shopping', [])
        .directive('shoppingMain', function() {
            return {
                restrict: 'E',
                templateURL: 'templates/shopping-main.html',
                controllerAs: 'main',
                controller: 'ShoppingMainController'
            }
        });
})(window.angular);