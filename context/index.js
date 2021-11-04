import React, { createContext, useRef, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
   const [isDark, setIsDark] = useState(false);
   const [activeCard, setActiveCard] = useState(0);
   const parallax = useRef(null);

   const scroll = (card) => {
      if (parallax.current) {
         parallax.current.scrollTo(card);
         setActiveCard(card);
      }
   };

   return (
      <AppContext.Provider
         value={{
            activeCard,
            isDark,
            parallax,
            scroll,
            setActiveCard,
            setIsDark,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
