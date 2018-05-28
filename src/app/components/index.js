import angular from 'angular';
import Home from './home';
import Detail from './detail';
import Omdb from './omdb';
import About from './about';

let componentModule = angular.module('app.components', [
  Home,
  Detail,
  Omdb,
  About
])
.name;

export default componentModule;
