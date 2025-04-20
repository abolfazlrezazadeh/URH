const {
  userAuthController
} = require('../../http/controller/user/auth/auth.controller')
const soap = require('soap')
const { userController } = require('../../http/controller/user/user.controller')

const router = require('express').Router()

router.post('/get-otp', userAuthController.getOtp)
router.post('/check-otp', userAuthController.checkOtp)
router.post('/refresh-token', userAuthController.refreshToken)


module.exports = {
  userValidationRoutes: router
}
