import React, { createContext, useRef, useState } from "react";

export const AppContext = createContext({
   about: null,
   skills: null,
   experience: null,
   portfolio: null,
   contact: null,
});

export const AppProvider = ({ children }) => {
   const entries = {
      about: useRef(),
      skills: useRef(),
      experience: useRef(),
      portfolio: useRef(),
      contact: useRef(),
   };

   const [activeCard, setActiveCard] = useState(null);

   // Dark Theme Controls
   const [darkTheme, setDarkTheme] = useState(true);

   return (
      <AppContext.Provider
         value={{
            entries,
            activeCard,
            setActiveCard,
            darkTheme,
            setDarkTheme,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
