import angular from 'angular';
import Omdb from './omdb';
import About from './about';

let componentModule = angular.module('app.components', [
  Omdb,
  About
])
.name;

export default componentModule;
