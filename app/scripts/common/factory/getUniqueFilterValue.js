angular.module('onlineReportApp')
  .factory('getUniqueFilterValue', getUniqueFilterValue);

function getUniqueFilterValue() {
  var uniqueFilterHeader;

  var validHeader = function(value) {
    if (value === 'Created' || value === 'Closed' || value === 'SLA due' || value === 'Short description' || value === 'State' || value === 'Reason') {
      return false;
    } else {
      return value;
    }
  };

  var uniqueList = function(filteredHeader, columnValue) {
    var newObj,
        tempArr,
        finalArr=[],
        tempObj;

    for(var j=0; j<filteredHeader.length; j++) {
      newObj = {};
      tempArr=[];
      tempObj = {};

      for(var i = 0; i < columnValue.length; i++)
      {
        if (!newObj[columnValue[i][filteredHeader[j]]])
        {
          newObj[columnValue[i][filteredHeader[j]]] = true;
          if (columnValue[i][filteredHeader[j]] === "" || columnValue[i][filteredHeader[j]] === " " || columnValue[i][filteredHeader[j]] === "*") {
            tempArr.push("Other");
          } else {
            tempArr.push(columnValue[i][filteredHeader[j]]);
          }
        }
      }

      tempObj.headerName = filteredHeader[j];
      tempObj.headerListUniqueName = tempArr.sort();
      finalArr.push(tempObj);
    }

    return finalArr;
  }

  var getUniqueFilterHeaderValue = function(inputRes) {
    if (typeof inputRes === "object") {
      var columnValue = Object.values(inputRes);
      var uniqueValue = Object.keys(columnValue[0]);
      var filteredHeader = uniqueValue.filter(validHeader);
      var uniqueFilterHeader = uniqueList(filteredHeader, columnValue);
      return uniqueFilterHeader;
    } else {
      console.log("Please send an object for Filter Header Unique Value");
    }
  };

  return {
    getUniqueFilterHeaderValue: getUniqueFilterHeaderValue
  };
}
