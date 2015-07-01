(function(angular){
    function review() {
        return {
            restrict: 'E',
            require: '^main',
            controllerAs: 'review',
            controller: 'ReviewController'
        }
    }

    angular.module('shopping')
        .directive('review', review);
})(window.angular);