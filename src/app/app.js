import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common';
import AppComponent from './app.component';

angular.module('app', [
    uiRouter,
    Common
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
