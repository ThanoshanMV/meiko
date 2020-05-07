const expect = require('chai').expect;
const request = require('request');

/**
 * unit test for meiko begins
 */
describe('Testing meiko app status and content type', function () {
  it('Should return meiko container-app', function (done) {
    request('http://localhost:3000', function (error, response, body) {
      // HTTP status should be 200
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Main page content', function (done) {
    request('http://localhost:3000', function (error, response, body) {
      //We're are serving html file. So Content-Type should be text/html
      expect(response.headers['content-type']).to.equal('text/html');
      done();
    });
  });
});
