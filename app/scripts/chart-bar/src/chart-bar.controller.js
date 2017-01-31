angular
  .module('onlrep.chart-bar')
  .controller('OnlrepChartBarCtrl', OnlrepChartBarCtrl);

OnlrepChartBarCtrl.$inject = ['getReferenceDataService', 'getUniqueFilterValue', 'getChartSelectedService'];

function OnlrepChartBarCtrl(getReferenceDataService, getUniqueFilterValue, getChartSelectedService) {
  var vm = this;
  vm.myDataSource = {};

  getReferenceDataService.getReferenceData()
      .then(
        function (initialData) {
          vm.dataHeaderName = getUniqueFilterValue.getUniqueFilterHeaderValue(initialData);
          var dataToShown = vm.dataHeaderName[getChartSelectedService.chartSelected[0]]["headerListUniqueName"];
          var captionText = vm.dataHeaderName[getChartSelectedService.chartSelected[0]]["headerName"];

          console.log(getChartSelectedService.chartSelected[0]);
          console.log(getChartSelectedService.getChartSelected());

          var dataShw = {
            caption: captionText,
            startingangle: "300",
            showlabels: "0",
            showlegend: "1",
            enablemultislicing: "0",
            slicingdistance: "30",
            showpercentvalues: "1",
            showpercentintooltip: "0",
            plottooltext: "Status: $label, Total Count: $datavalue",
            theme: "fint"
          };

          vm.myDataSource.chart = dataShw;
          vm.myDataSource.data = dataToShown;
        }
      );
}
