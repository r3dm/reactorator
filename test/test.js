import chai, { expect } from 'chai';
import reactorator from '../src';

chai.should();

describe('reactorator', function() {
  it('should return a function', () => {
    let reactorate = reactorator({});
    expect(reactorate).to.exist;
    reactorate.should.be.a('function');
  });

  it('should throw if mixin contains react lifecycle', () => {
    expect(function () {
      reactorator({ childContextTypes: null });
    }).to.throw(/do not feature react lifecycle/);
  });

  describe('reactorate', () => {
    it('should decorate prototype class', () => {
      function FauxComp() {}
      let reactorate = reactorator({ one: 'ring' });
      let DecoratedComp = reactorate(FauxComp);
      let decoratedComp = new DecoratedComp();
      expect(decoratedComp.one).to.exist;
      decoratedComp.one.should.equal('ring');
    });
  });
});
