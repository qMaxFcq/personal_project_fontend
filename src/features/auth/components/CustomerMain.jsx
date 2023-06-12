import React from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";

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
      console.log(res.data);
    };
    fetchCustomer();
  }, []);
  return (
    <div className="max-w-[100rem] mx-auto px-8 py-6 flex justify-center ">
      <table className="">
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>last Name</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => (
            <tr key={data.id}>
              <td>{data.customerId}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.typeId}</td>
              <td>{data.statusId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
