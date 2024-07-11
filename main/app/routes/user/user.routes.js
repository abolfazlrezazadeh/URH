const {
  userController,
} = require("../../http/controller/user/user.controller");

const router = require("express").Router();

router.post("/", userController.updateUser);

module.exports = {
  userRoutes: router,
};
