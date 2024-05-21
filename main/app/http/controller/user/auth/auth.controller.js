const { StatusCodes: httpStatus } = require("http-status-codes");
const controller = require("../../main.controller");
const {
  getOtpSchema,
  checkOtpSchema,
} = require("../../../validator/user/user.validator");
const { randomNumberGenerator, signAccessToken } = require("../../../../utils/functions");
const { userModel } = require("../../../../model/user/user.model");
const createHttpError = require("http-errors");

class authController extends controller {
  async getOtp(req, res, next) {
    try {
      await getOtpSchema.validateAsync(req.body);
      const { phone } = req.body;
      const code = randomNumberGenerator();
      const result = await this.saveUser(phone, code);
      if (!result) {
        throw createHttpError.Unauthorized(
          "وورود موفقیت آمیز نبود ، لطفا مجددا تلاش کنید "
        );
      }
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        data: {
          message: "کد اعتبار سنجی با موفقیت ارسال شد",
          code,
          phone,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async checkOtp(req, res, next) {
    try {
      await checkOtpSchema.validateAsync(req.body);
      const { phone, code } = req.body;
      const user = await userModel.findOne({ phone });
      if (!user) throw createHttpError.NotFound("کاربری یافت نشد");
      if (user.otp.code != code)
        throw createHttpError.Unauthorized("کد اعتبار سنجی صحیح نمی باشد");
      const now = Date.now();
      if(+user.otp.expiresIn < now) throw createHttpError.Unauthorized("کد اعتبار سنجی منقضی شده است")
      const accessToken = await signAccessToken(user._id, user.phone)
    return res.status(httpStatus.OK).json({
      statusCode : httpStatus.OK,
      data : {
        accessToken
      }
    })
    } catch (error) {
      next(error);
    }
  }
  async saveUser(phone, code) {
    let otp = {
      code,
      // code expires in 2 minuts
      expiresIn: new Date().getTime() + 120_000,
    };
    const result = await this.checkExistUser(phone);
    if (result) return await this.updateUser(phone, { otp });
    return !!(await userModel.create({
      phone,
      otp,
    }));
  }
  async checkExistUser(phone) {
    const user = await userModel.findOne({ phone });
    //if user exist return true
    return !!user;
  }
  async updateUser(phone, objectData = {}) {
    Object.keys(objectData).forEach((key) => {
      if (
        ["", " ", "  ", "0", 0, NaN, undefined, null].includes(objectData[key])
      )
        delete objectData[key];
    });
    const updateResult = await userModel.updateOne(
      { phone },
      { $set: objectData }
    );
    //if updated return true
    return !!updateResult.modifiedCount;
  }
}

module.exports = {
  userAuthController: new authController(),
};
