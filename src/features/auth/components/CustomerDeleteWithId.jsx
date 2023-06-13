import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CustomerDeleteWithId({ datas }) {
  // console.log(datas);
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

  const hdlDelete = () => {
    const delCustomer = async () => {
      const res = await axios.delete(`http://localhost:8888/admin/${datas}`);
    };
    delCustomer();
  };

  return (
    <form>
      <div className="text-2xl flex flex-col">
        <div>Customer ID : {value.customerId}</div>
        <div>
          <div>First Name : {value.firstName}</div>
          <div>Last Name : {value.lastName}</div>
        </div>
        <div className="flex gap-3 mt-3">
          <button
            className="bg-red-500 text-white w-full leading-[3rem] rounded-md text-xl font-bold"
            onClick={hdlDelete}
          >
            Confirm Delete
          </button>
          <button className="bg-blue-500 text-white w-full leading-[3rem] rounded-md text-xl font-bold">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
