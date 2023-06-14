import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import AddCustomerContainer from "./AddCustomerContainer";
import CustomerIndatabase from "./CustomerIndatabase";
import CustomerMain from "./CustomerMain";
import CustomerSearch from "./CustomerSearch";

export default function CustomerContainer() {
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState([]);

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
          <AddCustomerContainer />
        </div>
      )}

      <div>
        <CustomerIndatabase />
      </div>
      <div className="flex justify-end">
        <CustomerSearch />
      </div>
      <div className="flex justify-center ">
        <CustomerMain />
      </div>
    </div>
  );
}
