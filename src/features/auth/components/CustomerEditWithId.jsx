import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import AddCustomerInput from "./AddCustomerInput";
import InputErrorMessage from "./InputErrorMessage";
import validateEditCustomer from "../../../validate/validate-updatecustomer";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export default function CustomerEditWithId({ datas }) {
  const [valueupdate, setValueupdate] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchCustomer = async () => {
      const res = await axios.get(
        `http://localhost:8888/admin/allcustomer/${datas}`
      );
      setValueupdate(res.data);
    };
    fetchCustomer();
  }, []);

  const handleChangeInput = (e) => {
    setValueupdate({ ...valueupdate, [e.target.name]: e.target.value });
  };

  const hdlEditCustomer = async (datas) => {
    const editCustomer = async () => {
      const res = await axios.put(
        `http://localhost:8888/admin/${datas}`,
        valueupdate
      );
    };
    editCustomer();
    toast("Update Done");
  };

  return (
    <form>
      <div className="grid gap-3 font-mono">
        <div>
          <AddCustomerInput
            name="customerId"
            value={valueupdate.customerId}
            onChange={handleChangeInput}
            isInvalid={error.customerId}
          />
          {error.customerId && <InputErrorMessage message={error.customerId} />}
        </div>
        <div className="flex gap-3">
          <AddCustomerInput
            name="firstName"
            value={valueupdate.firstName}
            onChange={handleChangeInput}
            isInvalid={error.firstName}
          />

          <AddCustomerInput
            name="lastName"
            value={valueupdate.lastName}
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
            value={valueupdate.phoneNumber}
            onChange={handleChangeInput}
            isInvalid={error.phoneNumber}
          />
          {error.phoneNumber && (
            <InputErrorMessage message={error.phoneNumber} />
          )}
        </div>
        <div>
          <AddCustomerInput
            type="date"
            name="dateOrder"
            value={valueupdate.dateOrder}
            onChange={handleChangeInput}
            isInvalid={error.dateOrder}
            min={new Date().toISOString().split("T")[0]}
          />
          {error.dateOrder && <InputErrorMessage message={error.dateOrder} />}
        </div>

        <div>
          <AddCustomerInput
            name="orderDetail"
            value={valueupdate.orderDetail}
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
            value={valueupdate.shopId}
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
            value={valueupdate.phonerecId}
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
            value={valueupdate.typeId}
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
            value={valueupdate.statusId}
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
      <div className="flex gap-3 mt-3">
        <button
          className="bg-green-500 hover:bg-green-600 text-white w-full leading-[3rem] rounded-md text-xl font-bold mt-3 flex justify-center hover:cursor-pointer"
          onClick={() => hdlEditCustomer(datas)}
        >
          Update Customer
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white w-full leading-[3rem] rounded-md text-xl font-bold mt-3 flex justify-center hover:cursor-pointer">
          Cancel Customer
        </button>
      </div>
    </form>
  );
}
