
const path = require("path");
const createError = require("http-errors");
function randomNumberGenerator() {
    return Math.floor(Math.random() * 90000);
  }

  module.exports = {
    randomNumberGenerator
  }