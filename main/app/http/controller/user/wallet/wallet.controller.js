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
        statusCode : 200,
        balance : user.wallet.balance
      })
    } catch (error) {
      next(error);
    }
  }
  async increaseWalletBalance(req, res, next) {
    try {
      // const id = req.user._id.toString();
      console.log("this is not parsed body",req.body);
      const input = req.body;
      
      const stringBody = JSON.stringify(input);
      const parsedBody = JSON.parse(stringBody); // Parse the JSON string back into an object
      console.log("this is parsed body",parsedBody);
      const { TAG, PRICE } = parsedBody; 
      console.log("this is parsed PRICE",PRICE);
      
      if (typeof PRICE !== "number") return res.json({ message: "price must be number" });
      const findUser = await userModel.findOne({cardNumber:TAG})

      if(!findUser) return res.json({message:"user not found"})
      const user = await userModel.findByIdAndUpdate(findUser._id,{$inc:{'wallet.balance':PRICE}},{new:true});
      return res.json({
        statusCode : 200,
        userBalance : user.wallet.balance
      })
    } catch (error) {
      next(error);
    }
  }
  async decreaseWalletBalance(req, res, next) {
    try {
      // const id = req.user._id.toString();
      console.log("this is not parsed body",req.body);
      const input = req.body;
      
      const stringBody = JSON.stringify(input);
      const parsedBody = JSON.parse(stringBody); // Parse the JSON string back into an object
      console.log("this is parsed body",parsedBody);
      const { TAG, PRICE } = parsedBody; 
      console.log("this is parsed PRICE",PRICE);
      
      
      
      if (typeof PRICE !== "number") return res.json({ message: "price must be number" });
      const findUser = await userModel.findOne({cardNumber:TAG})

      if(!findUser) return res.json({message:"user not found"})
    if(findUser.wallet.balance < PRICE) throw createHttpError.BadRequest("موجودی کافی نمیباشد  ")

      const user = await userModel.findByIdAndUpdate(findUser._id,{$inc:{'wallet.balance':-PRICE}},{new:true});
      return res.json({
        statusCode : 200,
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
      // need req.user
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
