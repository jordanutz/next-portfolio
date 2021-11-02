import React, { useContext } from "react";
import { AppContext } from "./";

const useAppContext = () => {
   const context = useContext(AppContext);

   if (!context) {
      throw new Error("AppContext needs to be within a AppContextProvider");
   }

   return context;
};

export default useAppContext;
