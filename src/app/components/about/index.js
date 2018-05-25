import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import aboutComponent from './about.component';

let aboutModule = angular.module('about', [
  uiRouter,
  ngMaterial
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('about', {
      url: '/about',
      component: 'about'
    });
})

.component('about', aboutComponent)
  
.name;

export default aboutModule;
