(function() {
    'use strict';

    angular
    // naming module myApp
        .module('myApp')
        // naming controller mainController
        .controller('mainController', mainController);

    mainController.$inject = ['mainFactory'];

    /* @ngInject */
    function mainController(mainFactory) {
        var vm = this;
        vm.title = 'mainController';

        activate();

        ////////////////
// function that gets the json data
        function activate() {
                   mainFactory.topSpots().then(
                    function(response) {
              vm.topSpots = response.data;
              toastr.success('Data found!!');
   
        },
        function(error){
            if (typeof error === 'object') {
                    toastr.error('There was a problem' + error.data);

                } else {
                    toastr.info("No data found!");
                }
            
        }
        )
        }
    }
})();