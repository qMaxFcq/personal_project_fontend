import React, { useState } from "react";
import { EllipsisIcon } from "../../../icons/index";
import CustomerMoreDetail from "./CustomerMoreDetail";
import CustomerDelete from "./CustomerDelete";
import CustomerEdit from "./CustomerEdit";

export default function CustomerList({ datas }) {
  const [selectedRow, setSelectedRow] = useState(null);
  const [close, setClose] = useState(true);

  const handleToggle = (rowIndex) => {
    setSelectedRow(rowIndex === selectedRow ? null : rowIndex);
  };

  return (
    <div className="flex justify- w-[45rem] ">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        {datas.map((data, index) => (
          <tr key={data.id}>
            <td>{index + 1}</td>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.Typeorder.typeOrder}</td>
            <td>{data.Statuscustomer.statusName}</td>

            <div
              className="hover:bg-gray-200 rounded-full h-9 w-9 flex items-center justify-center"
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
                  <li className="p-2 hover:bg-blue-200 rounded-lg font-mono cursor-pointer bg-blue-400 mb-2">
                    <CustomerEdit datas={data.id} />
                  </li>
                  <li className="p-2 hover:bg-red-200 rounded-lg font-mono cursor-pointer bg-red-500">
                    <CustomerDelete datas={data.id} />
                  </li>
                </ul>
              )}
            </div>
          </tr>
        ))}
      </table>
    </div>
  );
}
