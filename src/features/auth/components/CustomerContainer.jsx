import React from "react";
import AddCustomerForm from "./AddCustomerForm";
import AddCustomerContainer from "./AddCustomerContainer";

export default function CustomerContainer() {
  return (
    <div className="">
      Customer Relationship Management
      <div className="flex justify-end">
        <AddCustomerContainer />
      </div>
    </div>
  );
}
