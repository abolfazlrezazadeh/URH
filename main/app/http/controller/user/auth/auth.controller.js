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
  async sendOTP(code, phone) {
    try {
      const formData = new URLSearchParams();
      formData.append('template', "urh-otp");
      formData.append('receptor', phone);
      formData.append('token', code);
      console.log(formData);
      console.log(`https://api.kavenegar.com/v1/${process.env.SMS_TOKEN}/verify/lookup.json`);
      
      const { data } = await axios.post(
        `https://api.kavenegar.com/v1/364B7670444D596A51456F64704350736C645231483470444C534B764F66354D41503038425143445843343D/verify/lookup.json`,
        formData.toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      return data;
    } catch (err) {
      console.log(err);
      
      throw new Error("خطا در اتصال به سامانه پیامکی");
    }
  }
}

module.exports = {
  userAuthController: new authController()
}
