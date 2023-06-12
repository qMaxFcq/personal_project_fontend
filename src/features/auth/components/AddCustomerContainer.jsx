import { useState } from "react";
import AddCustomerForm from "./AddCustomerForm";
import Modal from "../../../components/Modal";

export default function AddCustomerContainer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="bg-green-500 text-white rounded-md px-4 leading-[3rem] font-mono hover:bg-green-600 tracking-wide "
        onClick={() => setOpen(true)}
      >
        ADD Customer
      </button>
      <Modal title="Add Customer" open={open} onClose={() => setOpen(false)}>
        <AddCustomerForm onSuccess={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
