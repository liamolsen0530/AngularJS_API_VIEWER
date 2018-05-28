class DetailController {
  constructor(LiquorService, $stateParams, AppConstants) {
    this.name = 'detail';
    this.LiquorService = LiquorService;
    this.detailId = $stateParams.id;

    this.isLoading = true;
    this.error = false;
    this.displayField = AppConstants.fushionDetail.advanceDetail;

    this.LiquorService.queryDetail(this.detailId).then(
      (res) => {
        this.isLoading = false;
        if (res.data.response.numFound === 1) {
          this.data = res.data.response.docs[0];
        } else {
          this.isLoading = false;
          this.error = true;
        }
      },

      (err) => {
        this.isLoading = false;
        this.error = true;
      }
    );    
  }

}

export default DetailController;
