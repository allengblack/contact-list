/**
 * Created by g-man on 9/25/16.
 */

var contactList = angular.module('contactList', []);

contactList.controller('ContactCtrl', function($scope, $http) {
    // $scope.mainMessage = "Hello from the controller.";

    // $scope.list = {};

    $http.get('/contactlist').success(function(response) {
        $scope.list = response;
    });

    // $scope.list = [person1, person2, person3];

});