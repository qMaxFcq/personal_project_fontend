import axios from "./axios";

export const register = (input) => axios.post("/register", input);
export const login = (input) => axios.post("/login", input);
export const addcustomer = (input) => axios.post("/admin", input);
export const fetchMe = () => axios.get("/me");
// export const removecustomer = (input) => axios.delete("admin/customer", input);
