import Joi from "joi";

const llmValidationSchema = Joi.object({
    question: Joi.string().required(),
    answer: Joi.string().required()
});

const validatellmResponse = (req, res, next) => {
    const {error}  = llmValidationSchema.validate(req.body);
    if (error) {
        console.log("Validation errors: ", error.details[0].message);
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

const llmRequirementSchema = Joi.object({
    userId: Joi.string().required(),
    requirements: Joi.string().required(),
});

const validatellmDiet = (req, res, next) => {
    const {error}  = llmRequirementSchema.validate(req.body);
    if (error) {
        console.log("Validation errors: ", error.details[0].message);
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

export { validatellmResponse, validatellmDiet };