import HomeModule from './index'

describe('Home', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(HomeModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('Home component should be visible when navigates to /', () => {
      $location.url('/');
      $rootScope.$digest();
      expect($state.current.component).toBe('home');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('home', {
        $scope: $rootScope.$new(),
        OMDBService: {},
        mdDialog: {}
      });
    });

    it('has a name property', () => {
      expect(controller.name).toBeDefined();
    });

    it('has a query property', () => {
      expect(controller.query).toBeDefined();
    });

    it('has a resultCnt property', () => {
      expect(controller.resultCnt).toBeDefined();
    });

    it('has a results property', () => {
      expect(controller.results).toBeDefined();
    });

    it('has a isLoading property', () => {
      expect(controller.isLoading).toBeDefined();
    });

    it('has a error property', () => {
      expect(controller.error).toBeDefined();
    });

  });

});
