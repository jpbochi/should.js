
/**
 * Module dependencies.
 */

var should = require('../')
  , assert = require('assert');

function err(fn, msg) {
  try {
    fn();
    should.fail('expected an error');
  } catch (err) {
    should.equal(msg, err.message);
  }
}
    console.log(Object.keys(window.mocha));
  mocha.setup({ ui: 'exports' });
  mocha.ui('exports');

module.exports = {
  'test double require': function(){
    require('../').should.equal(should);
  },

  'test assertion': function(){
    'test'.should.be.a.string;
    should.equal('foo', 'foo');
  },

  'test .expected and .actual': function(){
    try {
      'foo'.should.equal('bar');
    } catch (err) {
      assert('foo' == err.actual, 'err.actual');
      assert('bar' == err.expected, 'err.expected');
    }
  },

  'test chaining': function(){
    var user = { name: 'tj', pets: ['tobi', 'loki', 'jane', 'bandit'] };

    user.should.be.an.instanceOf(Object).and.have.property('name', 'tj');

    user.should.have.ownProperty('name')
      .which.not.have.length(3)
        .and.be.equal('tj');
  },

  'mocha.throwError is used by should.fail': function () {
    var wasMochaThrowErrorCalls = [];
    console.log(Object.keys(global));
    global.mocha = {
      throwError: function (err) {
        wasMochaThrowErrorCalls.push(err);
        throw err;
      }
    };

    try {
     (function(){
        should.fail();
     }).should.throw(should.AssertionError);

    //try {
    //  should.fail('expected an error');
    //} catch (err) {
      wasMochaThrowErrorCalls.length.should.equal(1, 'mocha.throwError should have been called once and only once');
      wasMochaThrowErrorCalls[0].should.be.an.instanceof(should.AssertionError, 'mocha.throwError should have been called with an AssertionError');
    } finally {
      delete global.mocha;
    }
  }
};
