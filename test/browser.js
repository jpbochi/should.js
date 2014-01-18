var should = require('../');
//var tests = require('./should.test.js');

//Object.keys(tests).forEach(function (testName) { });
//

//console.log(Object.keys(window));
console.log(Object.keys(window.mocha.options));

//describe(function () {
//it('fails', function () {
//  //should.fail();
//  throw new Error('wat');
//});
//});
//
//
module.exports = {
  'damn it': function () {
    throw new Error('wat');
  }
};
