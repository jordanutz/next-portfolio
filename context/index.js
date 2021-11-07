import React, { createContext, useRef, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
   /* Controls whether user has selected dark or light theme */
   const [isDark, setIsDark] = useState(false);

   /* Index of card present in the viewport */
   const [activeCard, setActiveCard] = useState(0);

   /* Triggers Mobile Menu */
   const [isActivated, setIsActivated] = useState(false);

   const parallax = useRef(null);

   const scroll = (card) => {
      if (parallax.current) {
         parallax.current.scrollTo(card);
         setActiveCard(card);
         setIsActivated(false);
      }
   };

   return (
      <AppContext.Provider
         value={{
            activeCard,
            isActivated,
            isDark,
            parallax,
            scroll,
            setActiveCard,
            setIsActivated,
            setIsDark,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
