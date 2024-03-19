const supertest = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const { app } = require("../server");

describe("GET /api/routes/route-detail", () => {
  it("debería devolver los detalles de la ruta", (done) => {
    supertest(app)
      .get("/api/routes/route-detail")
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an("array");
        done(err);
      });
  });
});
