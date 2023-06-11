import Joi from "joi";

const registerSchema = Joi.object({
  adminName: Joi.string().required().messages({
    "string.empty": "Admin Name is required.",
  }),
  firstName: Joi.string().required().messages({
    "string.empty": "First Name is required.",
  }),
  lastName: Joi.string().required().messages({
    "string.empty": "Last Name is required.",
  }),

  adminEmail: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "Last Name is required.",
  }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required()
    .messages({
      "string.empty": "Password is required.",
      "string.pattern.base":
        "Password must be at least 6 characters and contain only alphabet and number.",
    }),
  confirmpassword: Joi.string().valid(Joi.ref("password")).messages({
    "any.only": "Password and confirm password did not match.",
    "string.empty": "Confirm password is required.",
  }),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};

export default validateRegister;
