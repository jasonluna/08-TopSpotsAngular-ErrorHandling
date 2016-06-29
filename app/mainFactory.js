(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('mainFactory', mainFactory);

    mainFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function mainFactory($http, $q) {
        var service = {
            topSpots: topSpots
        };
        return service;

        ////////////////

        function topSpots() {

            var defer = $q.defer();

            $http({
                method: "GET",
                url: "../SD.json"
            }).then(function(response){
                if (typeof response.data === 'object') {
                    defer.resolve(response);

                } else {
                    defer.reject("No data found!");
                }
            },
                function(error) {
                    defer.reject(error);
                });

                return defer.promise;

            }
        }
    
})();
