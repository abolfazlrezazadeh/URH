
const router = require("express").Router();

router.get("/",(req,res,next)=>{
    return res.json({
        data : {
            message : "hello world !!"
        }
    })
})

module.exports = {
  homeRouter: router,
};
