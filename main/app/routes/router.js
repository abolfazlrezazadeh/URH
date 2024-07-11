const { homeRouter } = require("./api/mainPage")
const { verifyAccessTokken } = require("./middleware/verifyAccessToken")
const {userRoutes} = require("./user/user.routes")
const { userValidationRoutes} = require("./user/validation.routes")

const router = require("express").Router()


router.use('/user' , userValidationRoutes);
router.use('/user-profile' , verifyAccessTokken , userRoutes);
router.use('/' ,/*verifyAccessTokken ,*/ homeRouter);


module.exports = {
    allRoutes : router
}