class HomeController {
  constructor(OMDBService, $mdDialog) {
    this.name = 'home';
    this.OMDBService = OMDBService;
    this.mdDialog = $mdDialog;

    this.query = {
      s: '',
      type: 'movie',
      y: '',
      page: 1,
    };

    this.resultCnt = 0;
    this.results = [];
    this.isLoading = false;
    this.error = {};
  }

  search (ev, page = 1) {
    this.query.page = page;
    console.log(page);
    console.log(Math.ceil(this.resultCnt / 10));
    this.isLoading = true;
    this.OMDBService.getItems(this.query).then(
      (res) => {
        this.isLoading = false;
        if (res.data.Response === "False")
        {
          this.error = res.data;
          this.showAlert(ev);
        } else {
          this.results = res.data.Search;
          this.resultCnt = res.data.totalResults;
        }
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
    return Math.ceil(this.resultCnt / 10);
  }

}

export default HomeController;
