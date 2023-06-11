import { useState } from "react";
import Modal from "../../../components/Modal";

export default function AddCustomerContainer() {
  const [opne, setOpen] = useState(false);

  return (
    <div>
      <button
        className="bg-green-500 text-white rounded-md px-4 leading-[3rem] font-bold hover:bg-green-600 tracking-wide"
        onClick={() => setOpen(true)}
      >
        Add Customer
      </button>
      <Modal title="Sign up" open={open} onClose={() => setOpen(false)}>
        <AddCustomerForm onSuccess={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
