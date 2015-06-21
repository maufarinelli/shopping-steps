(function(angular) {
    angular.module('shopping')
        .controller('ShoppingMainController', function() {
            var self = this;

            self.currentStep = 1;

            self.steps = [
                'templates/step1.html',
                'templates/step2.html',
                'templates/step3.html',
                'templates/step4.html'
            ];

            this.back = function() {
                self.currentStep !== 1 ? self.currentStep-- : 1;
            };

            this.forward = function() {
                self.currentStep !== 4 ? self.currentStep++ : 4;
            }
        });
})(window.angular);