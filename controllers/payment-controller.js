(function(angular){
    function PaymentController($scope) {
        var self = this,
            mainController = $scope.main;

        function init() {
            self.user = {
                paymentCard: mainController.user.paymentCard ? mainController.user.paymentCard : 'visa',
                cardName: mainController.user.cardName ? mainController.user.cardName : '',
                cardNumber: mainController.user.cardNumber ? mainController.user.cardNumber : ''
            }
        }

        this.back = function() {
            mainController.updateModel(this.user);
            mainController.back();
        };

        this.forward = function() {
            mainController.updateModel(this.user);
            mainController.forward();
        };

        init();
    }

    angular.module('shopping')
        .controller('PaymentController', PaymentController);
})(window.angular);