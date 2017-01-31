angular
  .module('onlrep.header-bar')
  .controller('OnlrepHeaderBarCtrl', OnlrepHeaderBarCtrl);

OnlrepHeaderBarCtrl.$inject = ['getChartSelectedService'];

function OnlrepHeaderBarCtrl(getChartSelectedService) {
  var vm = this;
  vm.clientTitle = 'ADIDAS';
  vm.clickedValue = function(headerValue) {
    getChartSelectedService.setChartSelected(headerValue);
  }
}
