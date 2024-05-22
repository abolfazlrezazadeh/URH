const jwt = require("jsonwebtoken");
const path = require("path");
const createError = require("http-errors");
const { userModel } = require("../model/user/user.model");
const {
  ACCESS_TOKEN_SECRET_KEY,
  REFRESH_TOKEN_SECRET_KEY,
} = require("./constatnts");

function randomNumberGenerator() {
  return Math.floor(Math.random() * 90000);
}
async function signAccessToken(userId) {
  return new Promise(async (resolve, reject) => {
    const payload = {
      userId,
    };
    const options = {
      // 10 days
      expiresIn: "10d",
    };
    jwt.sign(payload, ACCESS_TOKEN_SECRET_KEY, options, (err, token) => {
      if (err) reject(createError.InternalServerError("خطای سروری"));
      resolve(token);
    });
  });
}
async function signRefreshToken(userId) {
  return new Promise(async (resolve, reject) => {
    const payload = {
      userId,
    };
    const options = {
      // 10 days
      expiresIn: "10d",
    };
    jwt.sign(payload, REFRESH_TOKEN_SECRET_KEY, options, (err, token) => {
      if (err) reject(createError.InternalServerError("خطای سروری"));
      resolve(token);
    });
  });
}
async function verifyRefreshToken(token) {
  try {
    return new Promise((resolve, reject) => {
      jwt.verify(token, REFRESH_TOKEN_SECRET_KEY, async (err, payload) => {
        if (err)
          reject(createError.Unauthorized("لطفا وارد حساب کاربری خود شوید"));
        const { userId } = payload || {};
        const user = await userModel.findOne({ _id: userId }, { phone: 0 });
        if (!user) reject(createError.Unauthorized("حساب کاربری یافت نشد"));
        resolve(userId);
      });
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  randomNumberGenerator,
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
};
