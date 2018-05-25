import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AppConstants } from './constants';
import Common from './common';
import Components from './components';
import serviceModule from './service';
import AppComponent from './app.component';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    serviceModule
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .constant('AppConstants', AppConstants)
  .component('app', AppComponent);
