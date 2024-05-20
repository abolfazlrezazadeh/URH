const { userAuthController } = require("../../http/controller/user/auth/auth.controller");

const router = require("express").Router();

router.post("/get-otp", userAuthController.getOtp);

module.exports = {
  userRoutes: router,
};
