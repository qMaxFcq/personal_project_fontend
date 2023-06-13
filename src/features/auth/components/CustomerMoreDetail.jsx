import React, { useState } from "react";
import Modal from "../../../components/Modal";
import CustomerAllDetail from "./CustomerAllDetail";
export default function CustomerMoreDetail({ datas }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>More Detail</button>
      <Modal title="Customer Detail" open={open} onClose={() => setOpen(false)}>
        <CustomerAllDetail onSuccess={() => setOpen(false)} datas={datas} />
      </Modal>
    </div>
  );
}
