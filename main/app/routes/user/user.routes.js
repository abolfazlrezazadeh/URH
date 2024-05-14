const router = require("express").Router();

router.get("/", (req, res, next) => {
  return res.send("hello world");
});

module.exports = {
  userRoutes: router,
};
