angular
 .module('onlrep.filter-bar')
 .directive('onlrepFilterBar', onlrepFilterBar);

function onlrepFilterBar() {
  var directive = {
    controller: 'OnlrepFilterBarCtrl',
    controllerAs: 'onlrepFilterBarCtrl',
    templateUrl: 'scripts/filter-bar/src/filter-bar.tpl.html',
    restrict: 'E',
  };

  return directive;
}

