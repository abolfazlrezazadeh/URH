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
      // const id = req.user._id.toString();
      const {cardNumber,price} = req.body;
      if(typeof(price) !== "number") return res.json({message : "price must be number"})
      const findUser = await userModel.findOne({cardNumber})

      if(!findUser) return res.json({message:"user not found"})
      const user = await userModel.findByIdAndUpdate(findUser._id,{$inc:{'wallet.balance':price}},{new:true});
      return res.json({
        user
      })
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  walletController: new walletcontroller(),
};
