const request = require("supertest");
const express = require("express");
const app = require("../index.js"); // Update this path if necessary.

describe("Weather API Tests", () => {
  test("Homepage renders correctly", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Hi, Please write your city.");
  });

  test("Valid city returns weather data", async () => {
    const city = "London";
    const res = await request(app).post("/weather").send({ city });
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Weather in London");
  });

  test("Invalid city returns an error message", async () => {
    const city = "InvalidCityName";
    const res = await request(app).post("/weather").send({ city });
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Could not fetch weather");
  });
});
