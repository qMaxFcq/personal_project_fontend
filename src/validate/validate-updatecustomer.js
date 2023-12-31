import Joi from "joi";

const editCustomerSchema = Joi.object({
  customerId: Joi.string().required().messages({
    "string.empty": "Customer ID is required.",
  }),
  firstName: Joi.string().required().messages({
    "string.empty": "first Name is required.",
  }),
  lastName: Joi.string().required().messages({
    "string.empty": "Last Name is required.",
  }),
  phoneNumber: Joi.string().required().messages({
    "string.empty": "Phone Number is required.",
  }),
  dateOrder: Joi.string().required().messages({
    "string.empty": "Date is required.",
  }),
  orderDetail: Joi.string().required().messages({
    "string.empty": "Date is required.",
  }),
  dateOrder: Joi.string().required().messages({
    "string.empty": "Date is required.",
  }),
  shopId: Joi.string().required().messages({
    "string.empty": "shopId is required.",
  }),
  phonerecId: Joi.string().required().messages({
    "string.empty": "phonerecId is required.",
  }),
  typeId: Joi.string().required().messages({
    "string.empty": "typeId is required.",
  }),
  statusId: Joi.string().required().messages({
    "string.empty": "statusId is required.",
  }),
});

const validateEditCustomer = (input) => {
  const { error } = editCustomerSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};

export default validateEditCustomer;
