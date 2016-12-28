angular
  .module('onlrep.chart-bar')
  .controller('OnlrepChartBarCtrl', OnlrepChartBarCtrl);

OnlrepChartBarCtrl.$inject = ['$scope'];

function OnlrepChartBarCtrl($scope) {
  $scope.myDataSource = {
    chart: {
      caption: "Harry's SuperMart",
      subCaption: "Top 5 stores in last month by revenue",
      numberPrefix: "$",
      theme: "fint"
    },
    data: [{
      label: "Bakersfield Central",
      value: "880000"
    }, {
      label: "Garden Groove harbour",
      value: "730000"
    }, {
      label: "Los Angeles Topanga",
      value: "590000"
    }, {
      label: "Compton-Rancho Dom",
      value: "520000"
    }, {
      label: "Daly City Serramonte",
      value: "330000"
    }]
  };

  $scope.attrs = {

    "caption": "Sales Comparison: 2013 versus 2014",
    "subCaption": "Harry’ s SuperMart",
  "numberprefix": "$",
    "plotgradientcolor": "",
    "bgcolor": "FFFFFF",
    "showalternatehgridcolor": "0",
    "divlinecolor": "CCCCCC",
    "showvalues": "0",
    "showcanvasborder": "0",
    "canvasborderalpha": "0",
    "canvasbordercolor": "CCCCCC",
    "canvasborderthickness": "1",
    "yaxismaxvalue": "30000",
    "captionpadding": "30",
    "linethickness": "3",
    "yaxisvaluespadding": "15",
    "legendshadow": "0",
    "legendborderalpha": "0",
    "palettecolors": "#f8bd19,#008ee4,#33bdda,#e44a00,#6baa01,#583e78",
    "showborder": "0"
};

  $scope.categories = [{
    "category": [{
      "label": "Jan"
    }, {
      "label": "Feb"
    }, {
      "label": "Mar"
    }, {
      "label": "Apr"
    }, {
      "label": "May"
    }, {
      "label": "Jun"
    }, {
      "label": "Jul"
    }, {
      "label": "Aug"
    }, {
      "label": "Sep"
    }, {
      "label": "Oct"
    }, {
      "label": "Nov"
    }, {
      "label": "Dec"
    }]
  }];

  $scope.dataset = [{
    "seriesname": "2013",
    "data": [{
      "value": "22400"
    }, {
      "value": "24800"
    }, {
      "value": "21800"
    }, {
      "value": "21800"
    }, {
      "value": "24600"
    }, {
      "value": "27600"
    }, {
      "value": "26800"
    }, {
      "value": "27700"
    }, {
      "value": "23700"
    }, {
      "value": "25900"
    }, {
      "value": "26800"
    }, {
      "value": "24800"
    }]
  },

    {
      "seriesname": "2012",
      "data": [{
        "value": "10000"
      }, {
        "value": "11500"
      }, {
        "value": "12500"
      }, {
        "value": "15000"
      }, {
        "value": "16000"
      }, {
        "value": "17600"
      }, {
        "value": "18800"
      }, {
        "value": "19700"
      }, {
        "value": "21700"
      }, {
        "value": "21900"
      }, {
        "value": "22900"
      }, {
        "value": "20800"
      }]
    }
  ];
}
