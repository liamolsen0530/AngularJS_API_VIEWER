import angular from 'angular';
import OMDBService from './omdb.service';
import LiquorService from './liquor.service';

let serviceModule = angular.module('app.services', []);
serviceModule.service('OMDBService', OMDBService);
serviceModule.service('LiquorService', LiquorService);

export default serviceModule.name;
