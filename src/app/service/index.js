import angular from 'angular';
import OMDBService from './omdb.service';
import LiquorService from './liquor.service';
import LocalStorageService from './localstorage.service';

let serviceModule = angular.module('app.services', []);
serviceModule.service('OMDBService', OMDBService);
serviceModule.service('LiquorService', LiquorService);
serviceModule.service('LocalStorageService', LocalStorageService);

export default serviceModule.name;
