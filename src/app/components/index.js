import angular from 'angular';
import Omdb from './omdb';
import Home from './home';
import About from './about';

let componentModule = angular.module('app.components', [
  Home,
  Omdb,
  About
])
.name;

export default componentModule;
