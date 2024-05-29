const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const { ACCESS_TOKEN_SECRET_KEY } = require("../../utils/constatnts");
const { userModel } = require("../../model/user/user.model");

function getToken(headers) {
  const [Bearer, token] = headers?.authorization?.split(" ") || [];
  if (token && ["Bearer", "bearer"].includes(Bearer)) return token;
      throw createError.Unauthorized("لطفا وارد حساب کاربری خود شوید");
}

async function verifyAccessTokken(req, res, next) {
  try {
    const token = getToken(req.headers);
    jwt.verify(token, ACCESS_TOKEN_SECRET_KEY, async (err, payload) => {
      try {
        if (err)
          throw createError.Unauthorized("لطفا وارد حساب کاربری خود شوید");
        const { userId } = payload || {};
        const user = userModel.findOne({ _id: userId }, { phone: 0 });
        if (!user) throw createError.Unauthorized("حساب کاربری یافت نشد");
        req.user = user;
        return next();
      } catch (error) {
        next(error);
      }
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  verifyAccessTokken,
};
