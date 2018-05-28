import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import detailComponent from './detail.component';

let detailModule = angular.module('detail', [
  uiRouter,
  ngMaterial
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('detail', {
      url: '/detail/:id',
      component: 'detail'
    });
})

.component('detail', detailComponent)
  
.name;

export default detailModule;
