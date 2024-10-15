const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Assuming your app file is named 'app.js'
const server = require('../app').server; // Modify to get the server instance

chai.use(chaiHttp);
const expect = chai.expect;

describe('App Tests', function() {
  it('should return Hello, PR Automation!', function(done) {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Hello, PR Automation!');
        done();
      });
  });

  // Add an after hook to close the server after tests
  after(function(done) {
    server.close(done);  // Gracefully close the server
  });
});
