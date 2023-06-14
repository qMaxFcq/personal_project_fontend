import { createContext } from "react";

import React from "react";

export const ProfileContext = createContext();

const [value, setValue] = useState([]);

export default function context({ children }) {
  return (
    <ProfileContext.Provider value={""}>{children}</ProfileContext.Provider>
  );
}
