/* global describe, it */

const request = require("supertest");
const server = require("../app");

describe("GET /", () => {
    it("should render ok", (done) => {
        request(server).get("/").expect(200, done);
    });
});

describe("GET /home/1", () => {
    it("should render ok", (done) => {
        request(server).get("/home/1").expect(200, done);
    });
});
