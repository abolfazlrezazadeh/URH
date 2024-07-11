const jwt = require("jsonwebtoken");
const path = require("path");
const createError = require("http-errors");
const { userModel } = require("../model/user/user.model");
const {
  ACCESS_TOKEN_SECRET_KEY,
  REFRESH_TOKEN_SECRET_KEY,
} = require("./constatnts");

function randomNumberGenerator() {
  let digits;
  digits = String(Math.floor(10_000 + Math.random() * 90_000));
  if (digits.length != 5)
    digits = String(Math.floor(10_000 + Math.random() * 90_000));
  return digits;
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
function deleteInvalidPropertyInObject(data = {}, blackList = []) {
  let nullishData = ["", " ", "  ", "0", null, undefined, 0];
  Object.keys(data).forEach((key) => {
    if (blackList.includes(key)) delete data[key];
    if (typeof data[key] == "string") data[key] = data[key].trim();
    if (Array.isArray(data[key]) && data[key].length > 0)
      data[key] = data[key].map((item) => item.trim());
    //if array is empty dont update that field
    if (Array.isArray(data[key]) && data[key].length == 0) delete data[key];
    if (nullishData.includes(data[key])) delete data[key];
  });
}

module.exports = {
  randomNumberGenerator,
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
  deleteInvalidPropertyInObject,
};
