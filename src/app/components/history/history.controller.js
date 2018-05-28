class HistoryController {
  constructor(LocalStorageService) {
    this.name = 'history';
    this.bookmark = LocalStorageService.getBookmark();
    this.history = LocalStorageService.getHistory();
  }

}

export default HistoryController;
