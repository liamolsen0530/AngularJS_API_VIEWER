import DetailModule from './index';

describe('Detail', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(DetailModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('Detail component should be visible when navigates to /', () => {
      $location.url('/detail/0');
      $rootScope.$digest();
      expect($state.current.component).toBe('detail');
    });
  });

});
