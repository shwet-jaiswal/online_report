angular
  .module('onlrep.chart-bar')
  .controller('OnlrepChartBarCtrl', OnlrepChartBarCtrl);

OnlrepChartBarCtrl.$inject = ['getColumnCount', 'getReferenceDataService', 'getUniqueFilterValue'];

function OnlrepChartBarCtrl(getColumnCount, getReferenceDataService, getUniqueFilterValue) {
  var vm = this;
  vm.dataToShown;
  var dataHeaderName;

  function init() {
    getReferenceDataService.getReferenceData()
      .then(
        function (initialData) {
          dataHeaderName = getUniqueFilterValue.getUniqueFilterHeaderValue(initialData);
          vm.dataToShown = getColumnCount.getSelectedColumnCount("Incident state", initialData, dataHeaderName);
          console.log(Object.keys(initialData));
          console.log(dataHeaderName);
        }
      );
  }

  init();

  vm.myDataModel = {
    chart: {
      caption: "Incident Status",
      startingangle: "300",
      showlabels: "0",
      showlegend: "1",
      enablemultislicing: "0",
      slicingdistance: "30",
      showpercentvalues: "1",
      showpercentintooltip: "0",
      plottooltext: "Status: $label, Total Count: $datavalue",
      theme: "fint"
    },
    data: vm.dataToShown
  };

  vm.myDataSource = {
    chart: {
      caption: "Incident Status",
      startingangle: "300",
      showlabels: "0",
      showlegend: "1",
      enablemultislicing: "0",
      slicingdistance: "30",
      showpercentvalues: "1",
      showpercentintooltip: "0",
      plottooltext: "Status: $label, Total Count: $datavalue",
      theme: "fint"
    },
    data: [{
      label: "Closed",
      value: "3250"
    }, {
      label: "Awaiting Customer",
      value: "142"
    }, {
      label: "Assigned",
      value: "27"
    }, {
      label: "In Process",
      value: "24"
    }, {
      label: "Pending",
      value: "1"
    }, {
      label: "Solved",
      value: "110"
    }]
  };
}
