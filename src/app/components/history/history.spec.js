import HistoryModule from './index'

describe('History', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(HistoryModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('History component should be visible when navigates to /', () => {
      $location.url('/history');
      $rootScope.$digest();
      expect($state.current.component).toBe('history');
    });
  });

});
