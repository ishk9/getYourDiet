import Joi from "joi";

const userValidationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.number().required(),
    password: Joi.string().required()
});

const validateUser = (req, res, next) => {
    const {error}  = userValidationSchema.validate(req.body);
    if (error) {
        console.log("Validation error while signing up: ", error.details[0].message);
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

const loginUserValidationSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

const validateLoginUser = (req, res, next) => {
    const {error} = loginUserValidationSchema.validate(req.body);
    if(error){
        console.log("Validation error while logging in: ", error);
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}

export { validateUser, validateLoginUser };