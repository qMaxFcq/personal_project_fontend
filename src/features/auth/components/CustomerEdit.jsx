import React, { useState } from "react";
import Modal from "../../../components/Modal";
import CustomerEditWithId from "./CustomerEditWithId";

export default function CustomerEdit({ datas, onEdit, onEdit2 }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Edit</button>
      <Modal title="Edit Customer" open={open} onClose={() => setOpen(false)}>
        <CustomerEditWithId
          onSuccess={() => setOpen(false)}
          datas={datas}
          onEdit={onEdit}
          onEdit2={onEdit2}
        />
      </Modal>
    </div>
  );
}
