import StarRatingModule from './starRating';
import StarRatingController from './starRating.controller';
import StarRatingComponent from './starRating.component';
import StarRatingTemplate from './starRating.html';

describe('StarRating', () => {
  let $rootScope, makeController;

  beforeEach(window.module(StarRatingModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StarRatingController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(StarRatingTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = StarRatingComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(StarRatingTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(StarRatingController);
      });
  });
});
