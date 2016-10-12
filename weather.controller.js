(function() {
    'use strict';

    angular
        .module('weatherApp')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['$http','WeatherFactory'];

    /* @ngInject */
    function WeatherController($http, WeatherFactory) {
        var vm = this;
        vm.title = 'WeatherController';

        activate();

        ////////////////

        function activate() {
        	getWeather('San Diego')
        }

       
function getWeather() {
           WeatherFactory.getWeather().then(
               function(data) { 
                   
                   vm.results = data;

               }).catch(function() {
                   vm.error = 'There has been an error!';
               });
       }
    }
})();

//Comments:
//
//
//
