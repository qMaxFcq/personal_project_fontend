import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addCustomer } from "../../auth/slice/auth-slice";
import AddCustomerInput from "./AddCustomerInput";
import validateAddCustomer from "../../../validate/validate-adcustomer";
import InputErrorMessage from "./InputErrorMessage";

const initialInput = {
  customerId: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  dateOrder: "",
  orderDetail: "",
  shopId: "",
  phonerecId: "",
  typeId: "",
  statusId: "",
};

export default function AddCustomerForm({ onSuccess }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateAddCustomer(input);
      if (result) {
        return setError(result);
      }
      setError({});
      await dispatch(addCustomer(input)).unwrap();
      toast.success("addCustomer successfully");
      onSuccess();
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid gap-3 font-mono">
        <div>
          <AddCustomerInput
            name="customerId"
            placeholder="Customer ID"
            value={input.customerId}
            onChange={handleChangeInput}
            isInvalid={error.customerId}
          />
          {error.customerId && <InputErrorMessage message={error.customerId} />}
        </div>
        <div className="flex gap-3">
          <AddCustomerInput
            name="firstName"
            placeholder="First Name"
            value={input.firstName}
            onChange={handleChangeInput}
            isInvalid={error.firstName}
          />

          <AddCustomerInput
            name="lastName"
            placeholder="Last Name"
            value={input.lastName}
            onChange={handleChangeInput}
            isInvalid={error.lastName}
          />
        </div>

        <div className="flex gap-16 -m-2">
          {error.firstName && <InputErrorMessage message={error.firstName} />}
          {error.lastName && <InputErrorMessage message={error.lastName} />}
        </div>
        <div>
          <AddCustomerInput
            name="phoneNumber"
            placeholder="Phone Number"
            value={input.phoneNumber}
            onChange={handleChangeInput}
            isInvalid={error.phoneNumber}
          />
          {error.phoneNumber && (
            <InputErrorMessage message={error.phoneNumber} />
          )}
        </div>
        <div>
          <AddCustomerInput
            name="dateOrder"
            placeholder="Date Order"
            value={input.dateOrder}
            onChange={handleChangeInput}
            isInvalid={error.dateOrder}
          />
          {error.dateOrder && <InputErrorMessage message={error.dateOrder} />}
        </div>
        <div>
          <AddCustomerInput
            name="orderDetail"
            placeholder="Order Detail"
            value={input.orderDetail}
            onChange={handleChangeInput}
            isInvalid={error.orderDetail}
          />
          {error.orderDetail && (
            <InputErrorMessage message={error.orderDetail} />
          )}
        </div>
        <div className="flex justify-between text-lg gap-2">
          <select
            name="shopId"
            value={input.shopId}
            onChange={handleChangeInput}
            className={error.shopId ? "invalid" : ""}
          >
            <option value="">Shop</option>
            <option value="1">Never Sleep</option>
            <option value="2">HengHengHeng</option>
            <option value="3">MookieGoldenMonkey</option>
            <option value="4">MoneyQuick</option>
            {error.shopId && <InputErrorMessage message={error.shopId} />}
          </select>
          <select
            name="phonerecId"
            value={input.phonerecId}
            onChange={handleChangeInput}
            className={error.phonerecId ? "invalid" : ""}
          >
            <option value="">Phone</option>
            <option value="1">Never Sleep </option>
            <option value="2">HengHengHeng </option>
            <option value="3">MookieGoldenMonkey </option>
            <option value="4">MoneyQuick </option>
            {error.phonerecId && (
              <InputErrorMessage message={error.phonerecId} />
            )}
          </select>
        </div>

        <div className="flex justify-between text-lg">
          <select
            name="typeId"
            value={input.typeId}
            onChange={handleChangeInput}
            className={error.typeId ? "invalid" : ""}
          >
            <option value="">Type</option>
            <option value="1">Sell</option>
            <option value="2">Buy</option>
            {error.typeId && <InputErrorMessage message={error.typeId} />}
          </select>

          <select
            name="statusId"
            value={input.statusId}
            onChange={handleChangeInput}
            className={error.statusId ? "invalid" : ""}
          >
            <option value="">Status</option>
            <option value="1">OK</option>
            <option value="2">NOT OK</option>
            {error.statusId && <InputErrorMessage message={error.statusId} />}
          </select>
        </div>
      </div>
      <div>
        <button className="bg-green-500 hover:bg-green-600 text-white w-full leading-[3rem] rounded-md text-xl font-bold mt-3">
          Add Customer
        </button>
      </div>
    </form>
  );
}
