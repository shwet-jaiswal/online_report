'use strict';

/**
 * @ngdoc overview
 * @name onlineReportApp
 * @description
 * # onlineReportApp
 *
 * Main module of the application.
 */
angular
  .module('onlineReportApp', [
    'ngRoute',
    'onlrep.header-bar',
    'onlrep.filter-bar',
    'onlrep.chart-bar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
