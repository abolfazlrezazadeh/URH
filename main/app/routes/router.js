const { homeRouter } = require("./api/mainPage")
const { verifyAccessTokken } = require("./middleware/verifyAccessToken")
const { stationRouter } = require("./user/stations.routes")
const {userRoutes} = require("./user/user.routes")
const { userValidationRoutes} = require("./user/validation.routes")
const { walletRouter } = require("./user/wallet.routes")

const router = require("express").Router()


router.use('/user' , userValidationRoutes);
router.use('/user-profile' , verifyAccessTokken , userRoutes);
router.use('/wallet' , walletRouter);
router.use('/station' , stationRouter);
router.use('/' ,/*verifyAccessTokken ,*/ homeRouter);


module.exports = {
    allRoutes : router
}