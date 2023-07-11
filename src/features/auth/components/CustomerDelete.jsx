import React, { useState } from "react";
import Modal from "../../../components/Modal";
import CustomerDeleteWithId from "./CustomerDeleteWithId";

export default function CustomerDelete({ datas, onDel, onDel2 }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Delete</button>
      <Modal title="Delete" open={open} onClose={() => setOpen(false)}>
        <CustomerDeleteWithId
          onSuccess={() => setOpen(false)}
          datas={datas}
          onDel={onDel}
          onDel2={onDel2}
        />
      </Modal>
    </div>
  );
}
