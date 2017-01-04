angular
  .module('onlrep.filter-bar')
  .controller('OnlrepFilterBarCtrl', OnlrepFilterBarCtrl);

OnlrepFilterBarCtrl.$inject = ['getReferenceDataService', 'getUniqueFilterValue'];

function OnlrepFilterBarCtrl(getReferenceDataService, getUniqueFilterValue) {
  var vm = this;
  vm.dataHeaderName = getReferenceDataService.initialData;

  function init() {
    getReferenceDataService.getReferenceData()
      .then(
        function (initialData) {
          vm.dataHeaderName = getUniqueFilterValue.getUniqueFilterHeaderValue(initialData);
        }
      );
  }

  init();
}


