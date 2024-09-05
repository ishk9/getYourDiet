import Joi from "joi";

const feedbackValidationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    feedback: Joi.string().required()
});

const validateFeedback = (req, res, next) => {
    const error  = feedbackValidationSchema.validate(req.body);
    if (error) {
        console.log(error.error);
        return res.status(400).json({ error: error.error });
    }
    next();
};

export { validateFeedback };
