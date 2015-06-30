(function(angular){
    function ReviewController() {
        var self = this;

        var init = function() {
            self.user = {
                paymentCard: $scope.main.user.paymentCard ? $scope.main.user.paymentCard : 'visa',
                cardName: $scope.main.user.cardName ? $scope.main.user.cardName : '',
                cardNumber: $scope.main.user.cardNumber ? $scope.main.user.cardNumber : ''
            }
        };

        this.updateModel = function() {
            $scope.main.user = angular.extend($scope.main.user, this.user);
        }

        this.back = function() {
            $scope.main.back();
        }

        this.forward = function() {
            self.updateModel();
            $scope.main.forward();
        }

        init();
    }

    angular.module('shopping')
        .controller('ReviewController', ReviewController);
})(window.angular);