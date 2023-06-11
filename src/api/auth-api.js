import axios from "./axios";

export const register = (input) => axios.post("/register", input);
export const login = (input) => axios.post("/login", input);
export const addcustomer = (input) => axios.post("/admin", input);
