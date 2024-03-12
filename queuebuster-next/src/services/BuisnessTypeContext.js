import React from "react";
import { createContext, useContext, useState } from "react";

const BusinessContext = createContext();

export const BuisnessTypeContext = ({ children }) => {
  const [businessType, setBusinessType] = useState("");
  return (
    <BusinessContext.Provider value={{ businessType, setBusinessType }}>
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusinessContext = () => {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error("useYourContext must be used within a YourContextProvider");
  }
  return context;
};
