angular.module('onlineReportApp')
  .factory('getChartSelectedService', getChartSelectedService);

function getChartSelectedService() {
  var chartSelected = [5];

  function getChartSelected() {
    return chartSelected;
  }

  function setChartSelected(chart) {
    chartSelected[0] = chart;
  }

  return {
    chartSelected: chartSelected,
    getChartSelected: getChartSelected,
    setChartSelected: setChartSelected
  };
}
