import { createContext, useState } from "react";

export const a = createContext();

export default function ContextProvider({ children }) {
  const [cart, setcart] = useState([]);

  return (
    <a.Provider value={{ cart, setcart }}>
      {children}
    </a.Provider>
  );
}