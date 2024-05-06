const {userRoutes} = require("./user/user.routes")

const router = require("express").Router()


router.use('/user' , userRoutes)


module.exports = {
    allRoutes : router
}