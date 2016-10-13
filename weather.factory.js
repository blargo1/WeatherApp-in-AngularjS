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
            //Weather API, URL and unit conversion from kelvin to readable format
            $http({
                    method: 'GET',
                    url: 'http://api.openweathermap.org/data/2.5/weather',
                    params: {
                        APPID: 'e8f600ad69eb52fcb7a8414be532c6de',
                        q: cityName,
                        units: 'imperial'
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
//JK
//JKL
//Vk