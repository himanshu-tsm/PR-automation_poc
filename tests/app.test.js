const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, server } = require('../app'); // Import both the app and server

chai.use(chaiHttp);
const expect = chai.expect;

describe('App Tests', function() {
  it('should return Hello, PR Automation!', function(done) {
    chai.request(server)  // Use the server instance here, not just app
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Hello, PR Automation!');
        done();
      });
  });

  // Add an after hook to close the server after tests
  after(function(done) {
    server.close(done);  // Gracefully close the server after tests
  });
});
