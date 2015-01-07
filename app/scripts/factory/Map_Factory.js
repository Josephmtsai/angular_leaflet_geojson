'use strict';

var datafactory = angular.module('Map_Factory', ['Map_Factory']);
datafactory.factory('Map_Shape_Factory', function ($http, $q) {
    return {
        

        getNABU_BU_Shape_Map_Color: function () {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'json/us-states_bu.json' 
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (response) {
                deferred.reject(response);

            });
            return deferred.promise;

        },
        getEMEA_BU_Shape_Map_Color: function () {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'json/countries.geo.json' 
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (response) {
                deferred.reject(response);

            });
            return deferred.promise;

        }



    };
});