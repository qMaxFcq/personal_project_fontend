import { useState } from "react";
import AddCustomerForm from "./AddCustomerForm";
import Modal from "../../../components/Modal";

export default function AddCustomerContainer({onAdd}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="bg-blue-500 text-white rounded-md px-4 leading-[3rem] font-mono hover:bg-blue-600 tracking-wide mb-5 mt-5 "
        onClick={() => setOpen(true)}
      >
        Add Customer
      </button>
      <Modal title="Add Customer" open={open} onClose={() => setOpen(false)}>
        <AddCustomerForm onSuccess={() => setOpen(false)} onAdd={onAdd}/>
      </Modal>
    </div>
  );
}
