(function() {
    'use strict';

    angular
        .module('weatherApp')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['$http', 'WeatherFactory', 'toastr'];

    /* @ngInject */
    function WeatherController($http, WeatherFactory, toastr) {
        var vm = this;
        vm.title = 'WeatherController';
        vm.getWeather = getWeather;
        //vm.search = 'San Diego','New York','London','Tokyo','Paris';
        vm.history = [];
        vm.name = '';
        vm.temp;
        vm.desc;
        vm.lat;
        vm.long;
        vm.pressure;
        vm.humid;
        vm.low;
        vm.high;
        vm.speed;
        vm.dt;


        activate();

        ////////////////

        function activate() {
            getWeather(vm.search);

        }

        //Function to get all the user data
        function getWeather() {
            WeatherFactory.getWeather(vm.search).then(
                function(response) {
                    //console.log(response)
                    vm.name = response.data.name;
                    vm.desc = "http://openweathermap.org/img/w/" + response.data.weather[0].icon + ".png";
                    vm.temp = response.data.main.temp;
                    vm.lat = response.data.coord.lat;
                    vm.long = response.data.coord.lon;
                    vm.pressure = response.data.main.pressure;
                    vm.humid = response.data.main.humidity;
                    vm.low = response.data.main.temp_min;
                    vm.high = response.data.main.temp_max;
                    vm.wind = response.data.wind.speed;
                    vm.dt = Date(response.dt).replace('GMT-0700 (Pacific Daylight Time (Mexico))', "");
                    vm.history.push({
                        'search': vm.search,
                        'dt': vm.dt
                    });
                    //console.log(vm.lat)

                }).catch(function() {
                //toastr.success('We have Data!!');
                vm.error = 'There has been an error!';
                toastr.success('Houston we have Liftoff!!');
                //toastr.error('There is a problem: ' + error.data);
            });
        }
    }
})();

//Comments:
//JK
//JKL
//Vk
