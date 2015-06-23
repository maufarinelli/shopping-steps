(function(angular) {
    angular.module('shopping')
        .directive('personalInfo', function() {
            return {
                restrict: 'E',
                require: '^main',
                controllerAs: 'personal',
                controller: 'PersonalInfoController'
            }
        });
})(window.angular);