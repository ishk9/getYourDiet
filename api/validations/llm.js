import Joi from "joi";

const llmValidationSchema = Joi.object({
    response: Joi.string().required(),
    instruction: Joi.string().required()
});

const validatellmResponse = (req, res, next) => {
    const {error}  = llmValidationSchema.validate(req.body);
    if (error) {
        console.log("Validation errors: ", error.details[0].message);
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

export { validatellmResponse };