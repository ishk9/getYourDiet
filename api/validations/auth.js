import Joi from "joi";

const userValidationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.number().required()
});

const validateUser = (req, res, next) => {
    const {error}  = userValidationSchema.validate(req.body);
    if (error) {
        console.log("Validation errors: ", error.details[0].message);
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

export { validateUser };