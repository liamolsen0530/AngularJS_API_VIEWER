import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import omdbComponent from './omdb.component';

let omdbModule = angular.module('omdb', [
  uiRouter,
  ngMaterial
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('omdb', {
      url: '/omdb',
      component: 'omdb'
    });
})

.component('omdb', omdbComponent)
  
.name;

export default omdbModule;
