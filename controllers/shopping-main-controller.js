(function(angular) {
    function ShoppingMainController($scope) {
        var self = this;

        this.currentStep = 0;

        this.steps = [
            '/templates/personal-info.html',
            '/templates/shipping.html',
            '/templates/payment.html',
            '/templates/step4.html'
        ];

        this.user = {};

        this.back = function() {
            self.currentStep !== 0 ? self.currentStep-- : 0;
        };

        this.forward = function() {
            self.currentStep !== 3 ? self.currentStep++ : 3;
        }
    }

    angular.module('shopping')
        .controller('ShoppingMainController', ShoppingMainController);
})(window.angular);