class HomeController {
  constructor(LiquorService, $mdDialog) {
    this.name = 'home';
    this.LiquorService = LiquorService;
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

  search (ev, page = 1) {
    this.query.page = page;
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

}

export default HomeController;
