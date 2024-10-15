const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, server } = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('App Tests', function() {
  it('should return Hello, PR Automation!', function(done) {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Hello, PR Automation!');
        done();
      });
  });

  // Add an after hook to close the server after tests
  after(function(done) {
    if (server && server.listening) {  // Check if the server is running
      server.close(done);              // Close only if it's running
    } else {
      done();  // If not running, just call done
    }
  });
});
