import React from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";
import CustomerList from "./CustomerList";

export default function CustomerMain() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    const fetchCustomer = async () => {
      const res = await axios.get("http://localhost:8888/admin/allcustomer", {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("accessToken"),
        },
      });
      setData(res.data);
      // console.log(res.data);
    };
    fetchCustomer();
  }, []);

  return (
    <div className="bg-white p-3 shadow-lg shadow-slate-400 rounded-xl ">
      <div>
        <CustomerList datas={datas} />
      </div>
    </div>
  );
}
