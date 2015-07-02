(function(angular) {
    function ShoppingMainController($scope) {
        var self = this;

        this.currentStep = 0;

        this.steps = [
            '/templates/personal-info.html',
            '/templates/shipping.html',
            '/templates/payment.html',
            '/templates/review.html',
            '/templates/confirmation.html'
        ];

        this.user = {};

        this.updateModel = function(model) {
            self.user = angular.extend(self.user, model);
        };

        this.back = function() {
            self.currentStep !== 0 ? self.currentStep-- : 0;
        };

        this.forward = function() {
            self.currentStep !== 4 ? self.currentStep++ : 4;
        };

        this.goTo = function(step) {
            self.currentStep = step;
        };
    }

    angular.module('shopping')
        .constant('STEPS', {
            personal: 0,
            shipping: 1,
            payment: 2,
            review: 3,
            confirmation: 4
        })
        .controller('ShoppingMainController', ShoppingMainController);
})(window.angular);