(function(angular) {
    function shoppingMain() {
        return {
            restrict: 'E',
            templateUrl: '../templates/shopping-main.html',
            controllerAs: 'main',
            controller: 'ShoppingMainController'
        }
    }

    angular.module('shopping')
        .directive('shoppingMain', shoppingMain);
})(window.angular);