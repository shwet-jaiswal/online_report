angular
  .module('onlrep.filter-bar')
  .controller('OnlrepFilterBarCtrl', OnlrepFilterBarCtrl);

function OnlrepFilterBarCtrl() {
  var vm = this;
  vm.displayClassValue = true;
  vm.displayClick = function () {
    vm.displayClassValue = false;
  }
}
