const {
  userController,
} = require("../../http/controller/user/user.controller");

const router = require("express").Router();

router.put("/", userController.updateUser);

router.get("/",userController.getUserProfile)

module.exports = {
  userRoutes: router,
};
