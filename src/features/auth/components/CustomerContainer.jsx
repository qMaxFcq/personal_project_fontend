import React from "react";

import AddCustomerContainer from "./AddCustomerContainer";
import CustomerIndatabase from "./CustomerIndatabase";
import CustomerMain from "./CustomerMain";

export default function CustomerContainer() {
  return (
    <div className="">
      <h1>Customer Relationship Management</h1>

      <div className="flex justify-end">
        <AddCustomerContainer />
      </div>
      <div>
        <CustomerIndatabase />
      </div>
      <div>
        <CustomerMain />
      </div>
    </div>
  );
}
