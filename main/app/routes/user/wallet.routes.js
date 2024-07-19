const { walletController } = require("../../http/controller/user/wallet/wallet.controller");

const router = require("express").Router();


router.get('/' , walletController.getWalletBalance)


module.exports = {
    walletRouter : router
}