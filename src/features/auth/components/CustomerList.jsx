import React, { useState } from "react";
import { EllipsisIcon } from "../../../icons/index";

export default function CustomerList({ datas }) {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleToggle = (rowIndex) => {
    setSelectedRow(rowIndex === selectedRow ? null : rowIndex);
  };

  return (
    <div className="flex justify-center ">
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
            <td>{data.typeId}</td>
            <td>{data.statusId}</td>
            <div
              className="hover:bg-gray-200 rounded-full h-9 w-9 flex items-center justify-center"
              role="button"
              onClick={() => handleToggle(index)}
            >
              <EllipsisIcon className="fill-gray-500" />
            </div>
            {selectedRow === index && (
              <ul className="absolute bg-white rounded-xl border shadow-lg p-2 text-sm w-24">
                <li className="p-2 hover:bg-blue-200 rounded-lg font-mono cursor-pointer bg-blue-400 mb-2">
                  Edit
                </li>
                <li className="p-2 hover:bg-red-200 rounded-lg font-mono cursor-pointer bg-red-500">
                  Delete
                </li>
              </ul>
            )}
          </tr>
        ))}
      </table>
    </div>
  );
}
