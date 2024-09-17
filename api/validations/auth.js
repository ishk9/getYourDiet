import Joi from "joi";

const userValidationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
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

const passwordValidationSchema = Joi.object({
    currentPassword: Joi.string().required(),
    newPassword: Joi.string().required()
});

const validatePassword = (req, res, next) => {
    const {error} = passwordValidationSchema.validate(req.body);
    if(error){
        console.log("Validation error while changing password: ", error);
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}
const getUserValidationSchema = Joi.object({
    userId: Joi.string().required()
});

const validateGetUser = (req, res, next) => {
    const { error } = getUserValidationSchema.validate({ userId: req.params.userId });
    if (error) {
        console.log("Validation error while getting user details: ", error.details[0].message);
        return res.status(400).json({ error: error.details[0].message });
    }

    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Authorization token is required' });
    }

    next();
};

export { validateUser, validateLoginUser, validatePassword, validateGetUser };