const { walletController } = require("../../http/controller/user/wallet/wallet.controller");

const router = require("express").Router();


router.get('/' , walletController.getWalletBalance)
router.post('/increase' , walletController.increaseWalletBalance)
router.post('/decrease' , walletController.decreaseWalletBalance)
router.post('/matchTagIdToUser' , walletController.matchTagIdToUser)


module.exports = {
    walletRouter : router
}