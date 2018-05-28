import angular from 'angular';
import uiRouter from 'angular-ui-router';
import LocalStorageModule from 'angular-local-storage';
import { AppConstants } from './constants';
import Common from './common';
import Components from './components';
import serviceModule from './service';
import AppComponent from './app.component';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    serviceModule,
    LocalStorageModule
  ])
  .config(($locationProvider, $urlRouterProvider, localStorageServiceProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('home');
    localStorageServiceProvider.setPrefix(AppConstants.LOCAL_STORAGE_PREFIX);
  })
  .constant('AppConstants', AppConstants)
  .component('app', AppComponent);
