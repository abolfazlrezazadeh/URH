const { StatusCodes: httpStatus } = require("http-status-codes");
const controller = require("../../main.controller");
const { getOtpSchema } = require("../../../validator/user/user.validator");
const { randomNumberGenerator } = require("../../../../utils/functions");
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
          message: "پیام با موفقیت ارسال شد",
          code,
          phone,
        },
      });
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
    if (result) return (await this.updateUser(phone, { otp }));
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
    userAuthController : new authController()
}