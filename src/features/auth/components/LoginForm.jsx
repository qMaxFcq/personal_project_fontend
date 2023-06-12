import React from "react";
import LoginInput from "./LoginInput";
import useForm from "../../../hooks/useForm";
import validateLogin from "../../../validate/validate-login";
import InputErrorMessage from "./InputErrorMessage";
import { useDispatch } from "react-redux";
import { login } from "../slice/auth-slice";
import { toast } from "react-toastify";

export default function LoginForm() {
  const { input, handleChangeInput, error, handleSubmitForm } = useForm(
    {
      adminName: "",
      password: "",
    },
    validateLogin
  );

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data)).unwrap();
      toast("Susucc");
    } catch (err) {
      toast.error("Invalid Admid Name or Password");
    }
  };

  return (
    <form onSubmit={handleSubmitForm(onSubmit)}>
      <div className="grid gap-2 font-mono">
        <div>
          <LoginInput
            type="text"
            placeholder="Admin Name"
            name="adminName"
            value={input.adminName}
            onChange={handleChangeInput}
            isInvalid={error.adminName}
          />
          <InputErrorMessage message={error.adminName} />
        </div>
        <div>
          <LoginInput
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleChangeInput}
            isInvalid={error.password}
          />
          <InputErrorMessage message={error.password} />
        </div>
      </div>
      <div className="mb-2">
        <button className="bg-blue-500 text-white w-full leading-[3rem] rounded-md text-xl font-bold">
          Login
        </button>
      </div>
      <div className="bg-green-500 text-white w-full leading-[3rem] rounded-md text-xl font-bold">
        <a href="http://localhost:5173/register">Register</a>
      </div>
    </form>
  );
}
