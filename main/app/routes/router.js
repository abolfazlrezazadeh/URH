const { homeRouter } = require("./api/mainPage")
const { verifyAccessTokken } = require("./middleware/verifyAccessToken")
const {userRoutes} = require("./user/user.routes")

const router = require("express").Router()


router.use('/' ,verifyAccessTokken, homeRouter)
router.use('/user' , userRoutes)


module.exports = {
    allRoutes : router
}