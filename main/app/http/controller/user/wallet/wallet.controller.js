const { userModel } = require("../../../../model/user/user.model");
const controller = require("../../main.controller");
const createHttpError = require("http-errors");
class walletcontroller extends controller {
  async getWalletBalance(req, res, next) {
    try {
      // const id = req.user._id.toString();
      const id = "664dade45aa19d535320c3c8"
      console.log(id);
      const user = await userModel.findById(id);
      return res.status(200).json({
        balance : user.wallet.balance
      })
    } catch (error) {
      next(error);
    }
  }
  async increaseWalletBalance(req, res, next) {
    try {
      // const id = req.user._id.toString();
      const {cardNumber,price} = req.body;
      console.log(req.body);
      
      if(typeof(price) !== "number") return res.json({message : "price must be number"})
      const findUser = await userModel.findOne({cardNumber})

      if(!findUser) return res.json({message:"user not found"})
      const user = await userModel.findByIdAndUpdate(findUser._id,{$inc:{'wallet.balance':price}},{new:true});
      return res.json({
        userBalance : user.wallet.balance
      })
    } catch (error) {
      next(error);
    }
  }
  async decreaseWalletBalance(req, res, next) {
    try {
      // const id = req.user._id.toString();
      const {cardNumber,price} = req.body;
      console.log(req.body);
      
      if(typeof(price) !== "number") return res.json({message : "قیمت وورودی باید عدد باشد"})
      const findUser = await userModel.findOne({cardNumber})
    if(!findUser) return res.json({message:"user not found"})
    if(findUser.wallet.balance < price) throw createHttpError.BadRequest("موجودی کافی نمیباشد  ")

      const user = await userModel.findByIdAndUpdate(findUser._id,{$inc:{'wallet.balance':-price}},{new:true});
      return res.json({
        userBalance : user.wallet.balance
      })
    } catch (error) {
      next(error);
    }
  }
  async matchTagIdToUser(req, res, next) {
    try {
      // const id = req.user._id.toString();
      const {cardNumber} = req.body;
      console.log(req.body);
      const findUser = await userModel.findOne({cardNumber})
    if(findUser) throw createHttpError.BadRequest("لطفا ازکارت جدیدی استفاده کنید ")
      const user = await userModel.findByIdAndUpdate(findUser._id,{$set:{cardNumber}},{new:true});
      return res.json({
        messagee : "کارت با موفقیت به حساب شما متصل شد"
      })
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  walletController: new walletcontroller(),
};
