/**
 * Provides access to the JSON endpoint which contains the data about the items.
 */
export default class LocalStorageService {
  constructor(AppConstants, localStorageService) {
    'ngInject';

    this._AppConstants = AppConstants;
    this.localStorageService = localStorageService;
  }

  isBookmark(key) {
    const bookmarks = this.localStorageService.get(this._AppConstants.LOCAL_STORAGE_KEY.BOOKMARK) || {};
    const bookmark = bookmarks[key];
    return (bookmark ? true : false);
  }

  toggleBookmark(key) {
    const bookmarks = this.localStorageService.get(this._AppConstants.LOCAL_STORAGE_KEY.BOOKMARK) || {};

    if(this.isBookmark(key)){
      delete bookmarks[key];
    } else {
      bookmarks[key] = true;
    }
    this.localStorageService.set(this._AppConstants.LOCAL_STORAGE_KEY.BOOKMARK, bookmarks);
  }

  getBookmark() {
    const bookmarks = this.localStorageService.get(this._AppConstants.LOCAL_STORAGE_KEY.BOOKMARK) || {};
    return Object.keys(bookmarks);
  }

  addHistory(query) {
    const history = this.localStorageService.get(this._AppConstants.LOCAL_STORAGE_KEY.HISTORY) || [];
    history.push(query);
    this.localStorageService.set(this._AppConstants.LOCAL_STORAGE_KEY.HISTORY, history);
  }

  getHistory() {
    const history = this.localStorageService.get(this._AppConstants.LOCAL_STORAGE_KEY.HISTORY) || [];
    return history;
  }

}