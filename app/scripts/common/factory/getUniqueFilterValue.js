angular.module('onlineReportApp')
  .factory('getUniqueFilterValue', getUniqueFilterValue);

function getUniqueFilterValue() {
  var uniqueFilterHeader = undefined;

  var validHeader = function(value) {
    if (value === 'Created' || value === 'Closed' || value === 'SLA due' || value === 'Short description' || value === 'State' || value === 'Reason' || value === 'Number') {
      return false;
    } else {
      return value;
    }
  };

  var getUniqueObj = function(reqHeader, inputRes) {
    var headerListUniqueObj,
        headerUniqueObj,
        tempArr,
        headerListUniqueArr,
        finalArr = [],
        k, i, j;

    for (j=0; j<reqHeader.length; j++) {

      tempArr = [];
      headerListUniqueArr = [];
      headerUniqueObj={};
      k=0;

      for (var i=0; i<inputRes.length; i++) {
        if (inputRes[i][reqHeader[j]] === "" || inputRes[i][reqHeader[j]] === " " || inputRes[i][reqHeader[j]] === "*") {
          tempArr.push("Other");
        } else {
          tempArr.push(inputRes[i][reqHeader[j]]);
        }
      }

      tempArr.sort();

      while (k < tempArr.length) {
        headerListUniqueObj = {};
        headerListUniqueObj.label = tempArr[k];
        k = tempArr.lastIndexOf(headerListUniqueObj.label) + 1
        headerListUniqueObj.value = ""+k - tempArr.indexOf(headerListUniqueObj.label)+"";
        headerListUniqueArr.push(headerListUniqueObj);
      }

      headerUniqueObj.headerName = reqHeader[j];
      headerUniqueObj.headerListUniqueName = headerListUniqueArr;
      finalArr.push(headerUniqueObj);
    }
  return finalArr;
  }

  var getUniqueFilterHeaderValue = function(inputRes) {

      if (typeof inputRes === "object") {
        var uniqueValue = Object.keys(inputRes[0]);
        var reqHeader = uniqueValue.filter(validHeader);
        uniqueFilterHeader = getUniqueObj(reqHeader, inputRes);
        return uniqueFilterHeader;
      } else {
        console.log("Please send an object for Filter Header Unique Value");
      }

  };

  return {
    getUniqueFilterHeaderValue: getUniqueFilterHeaderValue
  };
}
