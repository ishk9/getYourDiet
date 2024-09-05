import Joi from "joi";

const feedbackValidationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    feedback: Joi.string().required()
});

const validateFeedback = (req, res, next) => {
    const {error}  = feedbackValidationSchema.validate(req.body);
    if (error) {
        console.log("Validation errors: ", error.details[0].message);
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

export { validateFeedback };
