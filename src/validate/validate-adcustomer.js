import Joi from "joi";

const addCustomerSchema = Joi.object({
  customerId: Joi.string().required().trim().messages({
    "string.empty": "Customer ID is required.",
  }),
  firstName: Joi.string().required().trim().messages({
    "string.empty": "first Name is required.",
  }),
  lastName: Joi.string().required().trim().messages({
    "string.empty": "Last Name is required.",
  }),
  phoneNumber: Joi.string().required().trim().messages({
    "string.empty": "Phone Number is required.",
  }),
  dateOrder: Joi.string().required().trim().messages({
    "string.empty": "Date is required.",
  }),
  orderDetail: Joi.string().required().trim().messages({
    "string.empty": "Date is required.",
  }),
  dateOrder: Joi.string().required().trim().messages({
    "string.empty": "Date is required.",
  }),
  shopId: Joi.string().required().trim().messages({
    "string.empty": "shopId is required.",
  }),
  phonerecId: Joi.string().required().trim().messages({
    "string.empty": "phonerecId is required.",
  }),
  typeId: Joi.string().required().trim().messages({
    "string.empty": "typeId is required.",
  }),
  statusId: Joi.string().required().trim().messages({
    "string.empty": "statusId is required.",
  }),
});

const validateAddCustomer = (input) => {
  const { error } = addCustomerSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};

export default validateAddCustomer;
