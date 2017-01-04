angular.module('onlineReportApp')
  .factory('getColumnCount', getColumnCount);

//getColumnCount.$inject = ['$rootScope'];

function getColumnCount() {
  var dataArr = [];
  var getSelectedColumnCount = function(selectedColumn, initialData, headerUniqueList) {
    var columnValue = Object.values(initialData);
    var i;

    for (i=0; i<columnValue.length; i++) {

    }

  };

  return {
    getSelectedColumnCount: getSelectedColumnCount
  };
}

