import React, { useState } from "react";
import Modal from "../../../components/Modal";
import CustomerEditWithId from "./CustomerEditWithId";

export default function CustomerEdit({ datas }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Edit</button>
      <Modal title="Edit Customer" open={open} onClose={() => setOpen(false)}>
        <CustomerEditWithId onSuccess={() => setOpen(false)} datas={datas} />
      </Modal>
    </div>
  );
}
