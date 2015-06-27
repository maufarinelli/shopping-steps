(function(angular) {
    function personalInfo() {
        return {
            restrict: 'E',
            require: '^main',
            controllerAs: 'personal',
            controller: 'PersonalInfoController'
        }
    }

    angular.module('shopping')
        .directive('personalInfo', personalInfo);
})(window.angular);