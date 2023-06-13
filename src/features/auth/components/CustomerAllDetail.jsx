import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export default function CustomerAllDetail({ datas }) {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const fetchCustomer = async () => {
      const res = await axios.get(
        `http://localhost:8888/admin/allcustomer/${datas}`
      );
      setValue(res.data);
    };
    fetchCustomer();
  }, []);

  return (
    <div className="text-2xl flex flex-col gap-3">
      <div>Customer ID : {value.customerId}</div>
      <div>
        First Name : {value.firstName} Last Name : {value.lastName}
      </div>
      <div>Phone Number : {value.phoneNumber}</div>
      <div>Date : {value.dateOrder}</div>
      <div>Order Detail : {value.orderDetail}</div>
      <div>KYC By : {value.Admin?.adminfirstName}</div>
      <div>Order From Shop : {value.Shopname?.shopName}</div>
      <div>Form Phone : {value.Phonerec?.phoneName}</div>
      <div>Type : {value.Typeorder?.typeOrder}</div>
      <div>Status : {value.Statuscustomer?.statusName}</div>
    </div>
  );
}
