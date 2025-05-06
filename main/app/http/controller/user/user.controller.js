const { userModel } = require('../../../model/user/user.model')
const { deleteInvalidPropertyInObject } = require('../../../utils/functions')
const { updateUserProfile } = require('../../validator/user/user.validator')
const controller = require('../main.controller')
const { StatusCodes: httpStatus } = require('http-status-codes')

class usercontroller extends controller {
  async updateUser (req, res, next) {
    try {
      const userId = req.user._id
      const data = await updateUserProfile.validateAsync(req.body)
      const blackList = [
        'phone',
        'token',
        'otp',
        'wallet',
        'favoritePlaces',
        'favoriteRoutes',
        'role',
        'cardNumber'
      ]
      deleteInvalidPropertyInObject(data, blackList)
      console.log(data)
      const updateUserResult = await userModel.updateOne(
        { _id: userId },
        { $set: {first_name:data.name,phone:data.phone} }
      )
      if (updateUserResult.modifiedCount == 0) {
        throw {
          status: httpStatus.INTERNAL_SERVER_ERROR,
          message: 'internal server error'
        }
      }
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        data: {
          message: 'اطلاعات شما با موفقیت بروزرسانی شد'
        }
      })
    } catch (error) {
      next(error)
    }
  }
  async getUserProfile (req, res, next) {
    try {
      const user = req?.user
      const founded = await userModel.findOne({ _id: user._id })
      return res.status(200).json({
        statusCode: 200,
        data: {
          user: { name: founded.first_name || "", phoneNumber: founded.phone }
        }
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = {
  userController: new usercontroller()
}
