const joi = require("@hapi/joi");
const getOtpSchema = joi.object({
    phone : joi.string().length(11).pattern(/^09[0-9]{9}$/).error(new Error("شماره موبایل صحیح نمی باشد"))
});
const checkOtpSchema = joi.object({
    phone : joi.string().length(11).pattern(/^09[0-9]{9}$/).error(new Error("phone number must be 9 characters")),
    code : joi.string().min(4).max(6).error(new Error("کد اعتبار سنجی اشتباه است"))
});

module.exports = {
    getOtpSchema,
    checkOtpSchema
}
