/**
 * Provides access to the JSON endpoint which contains the data about the items.
 */
export default class OMDBService {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
  }

  getItems(query) {
    const apiUrl = this._AppConstants.omdbDetail.apiUrl;
    const apiKey = this._AppConstants.omdbDetail.apiKey;

    const params = Object.assign({apiKey}, query);

    return this._$http({
      url: apiUrl,
      method: "GET",
      params
    });
  }

}