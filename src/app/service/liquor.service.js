/**
 * Provides access to the JSON endpoint which contains the data about the items.
 */
export default class LiquorService {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
  }

  queryItem(query) {
    const apiUrl = this._AppConstants.fushionDetail.fushionUrl;
    const fl = this._AppConstants.fushionDetail.basicDetail;

    const params = Object.assign({fl}, query);

    return this._$http({
      url: apiUrl,
      method: "GET",
      params,
      withCredentials : true
    });
  }

  queryDetail(id) {
    const apiUrl = this._AppConstants.fushionDetail.fushionUrl;

    const params = {
      q: `_lw_parser_record_number_l:${id}`,
      fl: this._AppConstants.fushionDetail.advanceDetail.join(',')
    }

    return this._$http({
      url: apiUrl,
      method: "GET",
      params,
      withCredentials : true
    });
  }

}