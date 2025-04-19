const { StatusCodes: httpStatus } = require('http-status-codes')
const controller = require('../../main.controller')
const axios = require('axios')
const {
  getOtpSchema,
  checkOtpSchema
} = require('../../../validator/user/user.validator')
const {
  randomNumberGenerator,
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken
} = require('../../../../utils/functions')
const { userModel } = require('../../../../model/user/user.model')
const createHttpError = require('http-errors')

class authController extends controller {
  async getOtp (req, res, next) {
    try {
      await getOtpSchema.validateAsync(req.body)
      const { phone } = req.body
      const code = randomNumberGenerator()
      const result = await this.saveUser(phone, code)
      if (!result) {
        throw createHttpError.Unauthorized(
          'وورود موفقیت آمیز نبود ، لطفا مجددا تلاش کنید '
        )
      }
      await this.sendOTP(code, phone)
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        data: {
          message: 'کد اعتبار سنجی با موفقیت ارسال شد',
          code,
          phone
        }
      })
    } catch (error) {
      next(error)
    }
  }
  async checkOtp (req, res, next) {
    try {
      await checkOtpSchema.validateAsync(req.body)
      const { phone, code } = req.body
      const user = await userModel.findOne({ phone })
      if (!user) throw createHttpError.NotFound('کاربری یافت نشد')
      if (user.otp.code != code)
        throw createHttpError.Unauthorized('کد اعتبار سنجی صحیح نمی باشد')
      const now = Date.now()
      if (+user.otp.expiresIn < now)
        throw createHttpError.Unauthorized('کد اعتبار سنجی منقضی شده است')
      const accessToken = await signAccessToken(user._id)
      const refreshToken = await signRefreshToken(user._id)
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        data: {
          accessToken,
          refreshToken
        }
      })
    } catch (error) {
      next(error)
    }
  }
  async refreshToken (req, res, next) {
    try {
      const { refreshToken } = req.body
      const userId = await verifyRefreshToken(refreshToken)
      const user = await userModel.findOne({ _id: userId }, { phone: 0 })
      const accessToken = await signAccessToken(user._id)
      const newRefreshToken = await signRefreshToken(user._id)
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        data: {
          accessToken,
          refreshToken: newRefreshToken
        }
      })
    } catch (error) {
      next(error)
    }
  }
  async saveUser (phone, code) {
    let otp = {
      code,
      // code expires in 2 minuts
      expiresIn: new Date().getTime() + 120_000
    }
    const result = await this.checkExistUser(phone)
    if (result) return await this.updateUser(phone, { otp })
    return !!(await userModel.create({
      phone,
      otp
    }))
  }
  async checkExistUser (phone) {
    const user = await userModel.findOne({ phone })
    //if user exist return true
    return !!user
  }
  async updateUser (phone, objectData = {}) {
    Object.keys(objectData).forEach(key => {
      if (
        ['', ' ', '  ', '0', 0, NaN, undefined, null].includes(objectData[key])
      )
        delete objectData[key]
    })
    const updateResult = await userModel.updateOne(
      { phone },
      { $set: objectData }
    )
    //if updated return true
    return !!updateResult.modifiedCount
  }
  async sendOTP (code, phone) {
    try {
      var Kavenegar = require('kavenegar')
      var api = Kavenegar.KavenegarApi({
        apikey:
          '6559654B776F6E6F5545507743346E557942492F6A4E6A68365748616B3133655A4165712F49394D4D686F3D'
      })
      api.Send({
        message: code,
        sender: '2000660110',
        receptor: phone
      })
      return console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = {
  userAuthController: new authController()
}
