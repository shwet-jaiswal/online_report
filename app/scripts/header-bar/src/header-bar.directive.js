angular
  .module('onlrep.header-bar')
  .directive('onlrepHeaderBar', onlrepHeaderBar);

function onlrepHeaderBar() {
  var directive = {
    controller: 'OnlrepHeaderBarCtrl',
    controllerAs: 'onlrepHeaderBarCtrl',
    templateUrl: 'scripts/header-bar/src/header-bar.tpl.html',
    restrict: 'E',
    transclude: true
  };

  return directive;
}

