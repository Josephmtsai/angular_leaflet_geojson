'use strict';

/**
 * @ngdoc overview
 * @name angularLeafletGeojsonApp
 * @description
 * # angularLeafletGeojsonApp
 *
 * Main module of the application.
 */
angular
  .module('angularLeafletGeojsonApp', [ 'leaflet-directive',
    'Map_Factory',
    'ui.select2', ])
  .controller('MainCtrl' , [ "$scope", "Map_Shape_Factory", function ( $scope,Map_Shape_Factory) {
     

     angular.extend($scope, {

        center: {
            lat: 40.64,
            lng: -96.02,
            zoom: 4
        },
        defaults: {
            maxZoom: 8,
            minZoom: 3
        },

        events: {
            map: {
                enable: ['zoomstart', 'drag', 'click', 'mousemove', 'contextmenu'],
                logic: 'emit'
            },
            markers: {
                enable: ['click', 'contextmenu'],
                logic: 'emit'
            }
        }

    });

     function Standstyle(feature) {
        return {
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7,
            fillColor:  'white'
        };
    }

     //State Shape
    Map_Shape_Factory.getNABU_BU_Shape_Map_Color().then(function (data) {
        
        $scope.State_Shape_Other = angular.copy( data);
        $scope.State_Shape = angular.copy( data);
        angular.extend($scope, {
            geojson: {
                data: data,
                style: Standstyle,
                resetStyleOnMouseout: true,
                target_menu: 'target_menu'
            },
            center: {
                lat: 40.64,
                lng: -96.02,
                zoom: 4
            }

        });
    }, function (err) {
        $scope.loadstatus--;
        alert("Error" + error);
    }); 

  } ]);

