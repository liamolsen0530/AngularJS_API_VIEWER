import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter,
  ngMaterial
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('search', {
      url: '/search/:search',
      component: 'home'
    })
    .state('home', {
      url: '/home',
      component: 'home'
    });
})

.component('home', homeComponent)
  
.name;

export default homeModule;
