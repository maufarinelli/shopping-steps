(function(angular){
    function confirmation() {
        return {
            restrict: 'E',
            require: '^main',
            controllerAs: 'confirmation',
            controller: 'ConfirmationController'
        }
    }

    angular.module('shopping')
        .directive('confirmation', confirmation);
})(window.angular);