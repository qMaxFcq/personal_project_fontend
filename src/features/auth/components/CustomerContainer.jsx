import React, { useState, useEffect } from "react";

import axios from "axios";
import AddCustomerContainer from "./AddCustomerContainer";
import CustomerIndatabase from "./CustomerIndatabase";
import CustomerMain from "./CustomerMain";
import CustomerSearch from "./CustomerSearch";
import { useSelector } from "react-redux";

export default function CustomerContainer() {
  const [admin, setAdmin] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [cusDelete, setDelete] = useState(false);
  const [cusEdit, setEdit] = useState(false);

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

  return (
    <div>
      <h1 className="text-6xl mb-10">Customer Relationship Management</h1>

      {admin && (
        <div className="flex justify-end">
          <AddCustomerContainer onAdd={() => setRerender(!rerender)} />
        </div>
      )}

      <div>
        <CustomerIndatabase
          rerender={rerender}
          cusDelete={cusDelete}
          cusEdit={cusEdit}
        />
      </div>
      <div className="flex justify-end">
        <CustomerSearch />
      </div>
      <div className="flex justify-center ">
        <CustomerMain
          rerender={rerender}
          onDel={() => setDelete(!cusDelete)}
          onEdit={() => setEdit(!cusEdit)}
        />
      </div>
    </div>
  );
}
