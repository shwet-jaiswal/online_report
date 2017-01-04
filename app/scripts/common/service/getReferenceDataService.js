angular.module('onlineReportApp')
  .factory('getReferenceDataService', getReferenceDataService);

getReferenceDataService.$inject = ['$http', '$q'];

function getReferenceDataService($http, $q) {
  var initialData = undefined;
  var getReferenceData = function() {

    if (!initialData) {
      var deferred = $q.defer();

      $http.get('data/reference-data.json')
        .then(
          function (result) {
            initialData = result.data
            deferred.resolve(initialData);
          },
          function (error) {
            initialData = error;
            deferred.reject(error);
          }
        );
      initialData = deferred.promise;
    }
    return $q.when(initialData);
  };

  return {
    initialData: initialData,
    getReferenceData: getReferenceData
  }
}
