const joi = require("@hapi/joi");
const createHttpError = require("http-errors");
const getOtpSchema = joi.object({
    phone : joi.string().length(11).pattern(/^09[0-9]{9}$/).error(createHttpError[401]("شماره موبایل صحیح نمی باشد"))
});
const checkOtpSchema = joi.object({
    phone : joi.string().length(11).pattern(/^09[0-9]{9}$/).error(createHttpError[401]("phone number must be 9 characters")),
    code : joi.string().min(4).max(6).error(createHttpError[401]("کد اعتبار سنجی اشتباه است"))
});
// const checkUserInformation = joi.object({
//     first_name : joi.string().min(3).error(createHttpError[401]("نام شما حداقل باید سه حرف داشته باشد")),
//     first_name : joi.string().min(3).error(createHttpError[401]("نام خانوادگی شما حداقل باید سه حرف داشته باشد")),
//     email : joi.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
// })


module.exports = {
    // checkUserInformation,
    getOtpSchema,
    checkOtpSchema
}
