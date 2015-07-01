(function(angular) {
    function ShoppingMainController($scope) {
        var self = this;

        this.currentStep = 0;

        this.steps = [
            '/templates/personal-info.html',
            '/templates/shipping.html',
            '/templates/payment.html',
            '/templates/review.html'
        ];

        this.user = {};

        this.updateModel = function(model) {
            self.user = angular.extend(self.user, model);
        }

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