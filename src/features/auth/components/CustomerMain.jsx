import React from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";
import CustomerList from "./CustomerList";

export default function CustomerMain({ rerender, onDel, onEdit }) {
  // console.log(user);
  const [datas, setData] = useState([]);
  const [cusDelete2, setDelete2] = useState(false);
  const [cusEdit2, setEdit2] = useState(false);

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
  }, [rerender, cusDelete2, cusEdit2]);

  return (
    <div className="flex flex-col">
      <div className="bg-white-100 p-3 shadow-lg shadow-slate-400 rounded-xl ">
        <div>
          <CustomerList
            datas={datas}
            onDel={onDel}
            onDel2={() => setDelete2(!cusDelete2)}
            onEdit={onEdit}
            onEdit2={() => setEdit2(!cusEdit2)}
          />
        </div>
      </div>
    </div>
  );
}
