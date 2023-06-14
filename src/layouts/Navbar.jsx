import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { WannIcon } from "../icons";
import { logout } from "../features/auth/slice/auth-slice";

export default function Header() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const fetchAdmin = async () => {
      const res = await axios.get("http://localhost:8888/admin");

      setValue(res.data);
      // console.log(res.data);
    };
    fetchAdmin();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-row bg-white shadow-lg sticky top-0 z-10 items-center justify-end font-mono p-5">
      <div className="py-2 justify-self-start p-3 flex-1">
        <Link to="/home">
          <WannIcon />
        </Link>
      </div>
      <div className="flex justify-around gap-10 p-4 text-2xl">
        <div>
          <button>Home</button>
        </div>
        |<button onClick={handleToggle}>{value.adminfirstName}</button>
        {isOpen && (
          <ul className="absolute m-9 ml-44 bg-white rounded-xl border shadow-lg p-2 text-sm w-44">
            <li className="p-2 hover:bg-gray-200 rounded-lg font-mono cursor-pointer">
              <h1>Edit Profile</h1>
            </li>
            <li
              className="p-2 hover:bg-gray-200 rounded-lg font-mono cursor-pointer"
              onClick={() => dispatch(logout())}
            >
              Logout
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
