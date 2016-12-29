'use strict';

/**
 * @ngdoc function
 * @name onlineReportApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the onlineReportApp
 */
angular.module('onlineReportApp')
  .controller('MainCtrl',['$http','$scope', function ($http, $scope) {
    var dataLocal;
    $http.get('data/reference-data.json').then(function(response) {
      console.log(response.data);
    });
  }]);
