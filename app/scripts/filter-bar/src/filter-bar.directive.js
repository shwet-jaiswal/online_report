angular
  .module('onlrep.filter-bar')
  .directive('onlrepFilterBar', onlrepFilterBar)
  .directive('subMenuFilter', subMenuFilter);

function onlrepFilterBar() {
  var directive = {
    controller: 'OnlrepFilterBarCtrl',
    controllerAs: 'onlrepFilterBarCtrl',
    templateUrl: 'scripts/filter-bar/src/filter-bar.tpl.html',
    restrict: 'E'
  };

  return directive;
}


function subMenuFilter () {
  return function linkFunction(scope, element, attrs) {
    element.on('click', function(event) {
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('ul').slideUp(200);
      }  else {
        element.addClass('open');
        element.children('ul').slideDown(200);
      }
    });
  };

}
