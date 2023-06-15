import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { data } from "autoprefixer";

export default function CustomerIndatabase() {
  const [datas, setData] = useState([]);

  const value = useSelector(state => state.auth.customerAll)


  useEffect(() => {
    const fetchCustomer = async () => {
      const res = await axios.get(
        `http://localhost:8888/admin/allcustomer${datas}`
      );
      // console.log(res);
      setData(res.data);
      
    };
    fetchCustomer();
   
  }, []);

  const dataCount = datas?.length;
  const dataVal = value?.length
  console.log(dataVal)
  

  const getStatusNameCount = () => {
    let count = 0;
    for (const item of datas) {
      if (item.Statuscustomer.statusName === "OK") {
        count++;
      }
    }
    return count;
  };
  const statusNameCount = getStatusNameCount();

  const getStatusNameCount2 = () => {
    let count = 0;
    for (const item of datas) {
      if (item.Statuscustomer.statusName === "NOT OK") {
        count++;
      }
    }
    return count;
  };
  const statusNameCount2 = getStatusNameCount2();

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
