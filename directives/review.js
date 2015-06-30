(function(angular){
    function review() {
        return {
            restrict: 'E',
            templateUrl: ''
            controllerAs: 'review',
            controller: 'ReviewController'
        }
    }

    angular.module('shopping')
        .directive('review', review);
})(window.angular);