(function(angular){
    function ConfirmationController($scope) {
        var self = this,
            mainController = $scope.main;

        var init = function() {
            self.user = {
                name: mainController.user.name,
                address: mainController.user.address
            };
        };

        init();
    }

    angular.module('shopping')
        .controller('ConfirmationController', ConfirmationController);
})(window.angular);