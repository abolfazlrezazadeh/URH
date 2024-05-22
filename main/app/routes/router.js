const { homeRouter } = require("./api/mainPage")
const { verifyAccessTokken } = require("./middleware/verifyAccessToken")
const {userRoutes} = require("./user/user.routes")

const router = require("express").Router()


router.use('/user' , userRoutes)
router.use('/' ,verifyAccessTokken, homeRouter)


module.exports = {
    allRoutes : router
}