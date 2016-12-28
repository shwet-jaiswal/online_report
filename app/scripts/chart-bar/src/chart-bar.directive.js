angular
  .module('onlrep.chart-bar')
  .directive('onlrepChartBar', onlrepChartBar);

function onlrepChartBar() {
  var directive = {
    controller: 'OnlrepChartBarCtrl',
    controllerAs: 'onlrepChartBarCtrl',
    templateUrl: 'scripts/chart-bar/src/chart-bar.tpl.html',
    restrict: 'E'
  };

  return directive;
}
