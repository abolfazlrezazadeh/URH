const {userModel} = require("../../../model/user/user.model");
const { deleteInvalidPropertyInObject } = require("../../../utils/functions");
const controller = require("../main.controller");
const { StatusCodes: httpStatus } = require("http-status-codes");

class usercontroller extends controller {
  async updateUser(req, res, next) {
    try {
      const userId = req.user._id;
      const data = req.body;
      const blackList = [
        "phone",
        "token",
        "otp",
        "wallet",
        "favoritePlaces",
        "favoriteRoutes",
        "role",
        "cardNumber",
      ];
    deleteInvalidPropertyInObject(data,blackList);
    console.log(data);
      const updateUserResult = await userModel.updateOne(
        { _id: userId },
        { $set: data }
      );
      if (updateUserResult.modifiedCount == 0) {
        throw {
          status: httpStatus.INTERNAL_SERVER_ERROR,
          message: "internal server error",
        };
      }
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        data: {
          message: "اطلاعات شما با موفقیت بروزرسانی شد",
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  userController: new usercontroller(),
};
