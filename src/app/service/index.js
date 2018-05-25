import angular from 'angular';
import OMDBService from './omdb.service';

let serviceModule = angular.module('app.services', []);
serviceModule.service('OMDBService', OMDBService);

export default serviceModule.name;
