import React from "react";

import AddCustomerContainer from "./AddCustomerContainer";
import CustomerIndatabase from "./CustomerIndatabase";
import CustomerMain from "./CustomerMain";
import CustomerSearch from "./CustomerSearch";

export default function CustomerContainer() {
  return (
    <div>
      <h1 className="text-6xl">Customer Relationship Management</h1>

      <div className="flex justify-end">
        <AddCustomerContainer />
      </div>

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
