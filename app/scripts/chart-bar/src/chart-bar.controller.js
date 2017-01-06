angular
  .module('onlrep.chart-bar')
  .controller('OnlrepChartBarCtrl', OnlrepChartBarCtrl);

OnlrepChartBarCtrl.$inject = ['getReferenceDataService', 'getUniqueFilterValue'];

function OnlrepChartBarCtrl(getReferenceDataService, getUniqueFilterValue) {
  var vm = this;
  vm.myDataSource = {};

  getReferenceDataService.getReferenceData()
      .then(
        function (initialData) {

          vm.dataHeaderName = getUniqueFilterValue.getUniqueFilterHeaderValue(initialData);
          var dataToShown = vm.dataHeaderName[2]["headerListUniqueName"];
          var captionText = vm.dataHeaderName[2]["headerName"];
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
