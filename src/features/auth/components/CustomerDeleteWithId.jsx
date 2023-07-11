import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { delcustomer } from "../slice/auth-slice";
// import { useEffect, useState } from "react";

export default function CustomerDeleteWithId({
  datas,
  onSuccess,
  onDel,
  onDel2,
}) {
  // console.log('...............',onDel)
  const dispatch = useDispatch();

  const hdlDelete = async () => {
    await dispatch(delcustomer(datas.id)).unwrap();
    onSuccess();
    onDel();
    onDel2();
  };

  return (
    <div>
      <div className="text-2xl flex flex-col">
        <div>Customer ID : {datas.customerId}</div>
        <div>
          <div>First Name : {datas.firstName}</div>
          <div>Last Name : {datas.lastName}</div>
        </div>
        <div className="flex gap-3 mt-3">
          <div
            className="bg-red-500 text-white w-full leading-[3rem] rounded-md text-xl font-bold flex justify-center hover:cursor-pointer hover:bg-red-600"
            onClick={() => hdlDelete(datas.id)}
          >
            Confirm Delete
          </div>
          <div className="bg-blue-500 text-white w-full leading-[3rem] rounded-md text-xl font-bold flex justify-center hover:cursor-pointer hover:bg-blue-600 ">
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}
