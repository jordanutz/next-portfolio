import React, { createContext, useRef, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
   const [activeCard, setActiveCard] = useState(null);
   const entries = {
      about: useRef(),
      skills: useRef(),
      experience: useRef(),
      portfolio: useRef(),
      contact: useRef(),
   };

   const handleSmoothScroll = (id) =>
      id.scrollIntoView({ block: "start", behavior: "smooth" });

   return (
      <AppContext.Provider
         value={{
            entries,
            handleSmoothScroll,
            activeCard,
            setActiveCard,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
