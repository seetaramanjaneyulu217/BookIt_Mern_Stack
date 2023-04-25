let chai = require("chai");
let server = require("../server");
let chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

//call restful api using http protocol

describe("book_it apis", () => {
  /**
   * get route
   */
  describe("GET /");

  /**
   * get by id
   */

  /**
   * post
   */

  /**
   * put
   */
});

const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const app = require("../server"); // assuming the Express app is defined in app.js
chai.use(chaiHttp);

describe("POST /search", () => {
  it("should return an array of bus objects if there are buses available", (done) => {
    chai
      .request(app)
      .post("/buses/search")
      .send({
        source: "vizag",
        destination: "Chennai",
        date: "2023-03-20",
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array").that.is.not.empty;
        expect(res.body[0]).to.have.property("source").that.equals("vizag");
        expect(res.body[0])
          .to.have.property("destination")
          .that.equals("Chennai");
        expect(res.body[0])
          .to.have.property("startDate")
          .that.equals("2023-03-20");
        done();
      });
  });

  it('should return a "No buses found" message if there are no available buses', (done) => {
    chai
      .request(app)
      .post("/search")
      .send({
        source: "Seattle",
        destination: "Los Angeles",
        date: "2023-04-25",
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("msg").that.equals("No buses found");
        done();
      });
  });
});
