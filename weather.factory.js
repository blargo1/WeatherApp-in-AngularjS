(function() {
    'use strict';

    angular
        .module('weatherApp')
        .factory('WeatherFactory', WeatherFactory);

    WeatherFactory.$inject = ['$http','$q'];

    /* @ngInject */
    function WeatherFactory($http, $q) {
        var service = {
            getWeather: getWeather
        };
        return service;

        ////////////////

        function getWeather(cityName) {
            var defer = $q.defer();

            $http({
                    method: 'GET',
                    url: 'http://api.openweathermap.org/data/2.5/weather',
                    params: {
                        APPID: 'f95eab6f6bca9fb39f009dd8f6421430',
                        q: cityName
                    }
                })
                .then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            defer.resolve(response);


                        } else {
                            defer.reject(response);
                        }
                    },
                    // failure
                    function(error) {
                        defer.reject(error);

                    });

            return defer.promise;
        }
    }
})();

//Comments:
//
//
//