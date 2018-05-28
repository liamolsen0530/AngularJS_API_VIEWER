class HomeController {
  constructor(LiquorService, LocalStorageService, $mdDialog) {
    this.name = 'home';
    this.LiquorService = LiquorService;
    this.LocalStorageService = LocalStorageService;
    this.mdDialog = $mdDialog;

    this.query = {
      q: '*:*',
      rows: 10,
      page: 1,
    };

    this.resultCnt = 0;
    this.results = [];
    this.isLoading = false;
    this.error = {};
  }

  search (ev, page = false) {
    if ( page === false ) {
      this.query.page = 1;
      this.LocalStorageService.addHistory(this.query.q);
    } else {
      this.query.page = page;
    }
    this.isLoading = true;
    this.LiquorService.queryItem(this.query).then(
      (res) => {
        this.isLoading = false;
        this.results = res.data.response.docs;
        this.resultCnt = res.data.response.numFound;
      },

      (err) => {
        this.isLoading = false;
        this.error = err;
        this.showAlert(ev);
      }
    );
  }

  showAlert(ev) {
    this.mdDialog.show(
      this.mdDialog.alert()
        .clickOutsideToClose(true)
        .title('There is error with the request')
        .textContent(this.error.Error)
        .ariaLabel('Alert Dialog')
        .ok('Got it!')
        .targetEvent(ev)
    );
  }

  totalPage() {
    return Math.ceil(this.resultCnt / this.query.size);
  }

  isBookmarked () {
    return this.LocalStorageService.isBookmark(this.query.q);
  }

  toggleBookmark() {
    this.LocalStorageService.toggleBookmark(this.query.q);
  }

}

export default HomeController;
