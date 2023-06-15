import React, { useState, useEffect } from "react";
import { EllipsisIcon } from "../../../icons/index";
import axios from "axios";
import CustomerMoreDetail from "./CustomerMoreDetail";
import CustomerDelete from "./CustomerDelete";
import CustomerEdit from "./CustomerEdit";

export default function CustomerList({ datas }) {
  
  const [selectedRow, setSelectedRow] = useState(null);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const fetchAdmin = async () => {
      const res = await axios.get("http://localhost:8888/admin");
      if (res.data.isAdmin == "admin") {
        setAdmin(true);
        return setAdmin;
      }
    };
    fetchAdmin();
  }, []);

  const handleToggle = (rowIndex) => {
    setSelectedRow(rowIndex === selectedRow ? null : rowIndex);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="w-[5rem]">No.</th>
            <th className="w-[13rem]">First Name</th>
            <th className="w-[13rem]">Last Name</th>
            <th className="w-[6rem]">Type</th>
            <th className="w-[6rem]">Status</th>
          </tr>
        </thead>
        {datas.map((data, index) => (
          <tr
            key={data.id}
            className="hover:bg-slate-200 cursor-pointer rounded-lg"
          >
            <td>{index + 1}</td>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.Typeorder.typeOrder}</td>
            <td>{data.Statuscustomer.statusName}</td>

              <div
                className="hover:bg-slate-200 rounded-full h-9  flex items-center justify-center w-[4rem]"
                role="button"
                onClick={() => handleToggle(index)}
              >
                <EllipsisIcon className="fill-gray-500" />
              </div>
            

            <div>
              {selectedRow === index && (
                <ul className="absolute bg-white rounded-xl border shadow-lg p-2 text-sm w-28">
                  <li className="p-1 hover:bg-blue-200 rounded-lg font-mono cursor-pointer bg-blue-400 mb-2">
                    <CustomerMoreDetail datas={data.id} />
                  </li>
                 {admin && <ul>
                  <li className="p-2 hover:bg-blue-200 rounded-lg font-mono cursor-pointer bg-blue-400 mb-2">
                    <CustomerEdit datas={data.id} />
                  </li>
                  <li className="p-2 hover:bg-red-200 rounded-lg font-mono cursor-pointer bg-red-500">
                    <CustomerDelete datas={data} />
                  </li>
                  </ul>}
                 
                </ul>
              )}
            </div>
          </tr>
        ))}
      </table>
    </div>
  );
}
