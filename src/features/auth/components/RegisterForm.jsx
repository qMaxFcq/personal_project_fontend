import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register } from "../../auth/slice/auth-slice";
import RegisterInput from "./RegisterInput";
import validateRegister from "../../../validate/validate-register";
import InputErrorMessage from "./InputErrorMessage";

const initialInput = {
  adminName: "",
  firstName: "",
  lastName: "",
  adminEmail: "",
  password: "",
  confirmpassword: "",
};

export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      if (result) {
        return setError(result);
      }
      setError({});
      await dispatch(register(input)).unwrap();
      toast.success("register successfully");
      onSuccess();
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid gap-3 font-mono">
        <div>
          <RegisterInput
            name="adminName"
            placeholder="Admin Name"
            value={input.adminName}
            onChange={handleChangeInput}
            isInvalid={error.adminName}
          />
          {error.adminName && <InputErrorMessage message={error.adminName} />}
        </div>
        <div className="flex gap-3">
          <RegisterInput
            name="firstName"
            placeholder="First Name"
            value={input.firstName}
            onChange={handleChangeInput}
            isInvalid={error.firstName}
          />

          <RegisterInput
            name="lastName"
            placeholder="Last Name"
            value={input.lastName}
            onChange={handleChangeInput}
            isInvalid={error.lastName}
          />
        </div>

        <div className="flex gap-32 -m-2">
          {error.firstName && <InputErrorMessage message={error.firstName} />}
          {error.lastName && <InputErrorMessage message={error.lastName} />}
        </div>
        <div>
          <RegisterInput
            name="adminEmail"
            placeholder="Email"
            value={input.adminEmail}
            onChange={handleChangeInput}
            isInvalid={error.adminEmail}
          />
          {error.adminEmail && <InputErrorMessage message={error.adminEmail} />}
        </div>
        <div>
          <RegisterInput
            name="password"
            placeholder="Password"
            value={input.password}
            onChange={handleChangeInput}
            isInvalid={error.password}
          />
          {error.password && <InputErrorMessage message={error.password} />}
        </div>
        <div>
          <RegisterInput
            name="confirmpassword"
            placeholder="Confirm Password"
            value={input.confirmpassword}
            onChange={handleChangeInput}
            isInvalid={error.confirmpassword}
          />
          {error.confirmpassword && (
            <InputErrorMessage message={error.confirmpassword} />
          )}
        </div>
      </div>
      <div>
        <button className="bg-green-500 hover:bg-green-600 text-white w-full leading-[3rem] rounded-md text-xl font-bold mt-3">
          Register
        </button>
      </div>
    </form>
  );
}
