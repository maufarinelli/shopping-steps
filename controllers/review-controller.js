(function(angular){
    function ReviewController($scope, STEPS) {
        var self = this,
            mainController = $scope.main;

        var init = function() {
            self.user = {
                name: mainController.user.name,
                email: mainController.user.email,
                phone: mainController.user.phone,
                address: mainController.user.address,
                shippingType: mainController.user.shippingType,
                paymentCard: mainController.user.paymentCard,
                cardName: mainController.user.cardName,
                cardNumber: mainController.user.cardNumber
            };

            self.product = {
                item: 'CD - Samba Esquema Noise, Mundo Livre S/A',
                image: '/images/samba_esquema_noise.jpg'
            };
        };

        self.STEPS = STEPS;

        this.edit = function(step) {
            mainController.goTo(step);
        };

        this.back = function() {
            mainController.back();
        };

        this.forward = function() {
            mainController.forward();
        };

        init();
    }

    angular.module('shopping')
        .controller('ReviewController', ReviewController);
})(window.angular);