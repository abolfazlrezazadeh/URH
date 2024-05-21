const jwt = require("jsonwebtoken");
const path = require("path");
const createError = require("http-errors");
const { userModel } = require("../model/user/user.model");
const { ACCESS_TOKEN_SECRET_KEY } = require("./constatnts");
function randomNumberGenerator() {
  return Math.floor(Math.random() * 90000);
}
async function signAccessToken(userId) {
  return new Promise(async (resolve, reject) => {
    const payload = {
      userId
    };
    const options = {
      // 10 days
      expiresIn: "10d",
    };
    jwt.sign(payload,ACCESS_TOKEN_SECRET_KEY,options,(err,token)=>{
      if(err) reject(createError.InternalServerError("خطای سروری"))
        resolve(token)
    })
  });
}

module.exports = {
  randomNumberGenerator,
  signAccessToken,
};
