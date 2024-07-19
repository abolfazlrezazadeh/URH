const { userModel } = require("../../../../model/user/user.model");
const controller = require("../../main.controller");

class walletcontroller extends controller {
  async getWalletBalance(req, res, next) {
    try {
      const id = req.user._id.toString();
      console.log(id);
      const user = await userModel.findById(id);
      return console.log(user.wallet.balance);
    } catch (error) {
      next(error);
    }
  }
  async increaseWalletBalance(req, res, next) {
    try {
      const id = req.user._id.toString();
      const user = await userModel.findById(id);
      user.wallet = 100_000;
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  walletController: new walletcontroller(),
};
