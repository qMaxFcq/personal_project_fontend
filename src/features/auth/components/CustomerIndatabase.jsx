import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function CustomerIndatabase({ rerender, cusDelete, cusEdit }) {
  const [datas, setData] = useState([]);
  const [dataCount, setDataCount] = useState(0);
  const [statusNameCount, setStatusNameCount] = useState(0);
  const [statusNameCount2, setStatusNameCount2] = useState(0);

  const value = useSelector((state) => state.auth.customerAll);

  useEffect(() => {
    const fetchCustomer = async () => {
      const res = await axios.get("http://localhost:8888/admin/allcustomer");
      setData(res.data);
    };
    fetchCustomer();
  }, [rerender, cusDelete, cusEdit]);

  useEffect(() => {
    setDataCount(datas.length);
  }, [datas]);

  useEffect(() => {
    const getStatusNameCount = () => {
      let count = 0;
      for (const item of datas) {
        if (item.Statuscustomer.statusName === "OK") {
          count++;
        }
      }
      return count;
    };
    setStatusNameCount(getStatusNameCount());
  }, [datas]);

  useEffect(() => {
    const getStatusNameCount2 = () => {
      let count = 0;
      for (const item of datas) {
        if (item.Statuscustomer.statusName === "NOT OK") {
          count++;
        }
      }
      return count;
    };
    setStatusNameCount2(getStatusNameCount2());
  }, [datas]);

  return (
    <div>
      <div className="flex justify-between mb-10 gap-5">
        <div className="bg-white max-w-[30rem] flex-1 min-[900px]:pt-[4.5rem] min-[1075px]:max-w-[36.25rem] p-10 shadow-lg shadow-slate-400 rounded-xl">
          <div className="pb-5 flex justify-center min-[900px]:pb-4 min-[900px]:justify-start"></div>
          <div className="font-semibold text-2xl">All Customer</div>
          <div className="text-9xl font-semibold"> {dataCount}</div>
        </div>
        <div className="bg-white max-w-[30rem] flex-1 min-[900px]:pt-[4.5rem] min-[1075px]:max-w-[36.25rem] p-10 shadow-lg shadow-slate-400 rounded-xl">
          <div className="pb-5 flex justify-center min-[900px]:pb-4 min-[900px]:justify-start"></div>
          <div className="font-semibold text-2xl">Status OK</div>
          <div className="text-9xl font-semibold"> {statusNameCount}</div>
        </div>
        <div className="bg-white max-w-[30rem] flex-1 min-[900px]:pt-[4.5rem] min-[1075px]:max-w-[36.25rem] p-10 shadow-lg shadow-slate-400 rounded-xl">
          <div className="pb-5 flex justify-center min-[900px]:pb-4 min-[900px]:justify-start"></div>
          <div className="font-semibold text-2xl">Status NOT OK</div>
          <div className="text-9xl font-semibold"> {statusNameCount2}</div>
        </div>
      </div>
    </div>
  );
}
