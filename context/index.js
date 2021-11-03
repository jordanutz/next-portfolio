import React, { createContext, useRef, useState } from "react";

export const AppContext = createContext({
   about: null,
   skills: null,
   experience: null,
   portfolio: null,
   contact: null,
});

export const AppProvider = ({ children }) => {
   // Dark Theme Controls
   const [darkTheme, setDarkTheme] = useState(true);

   const [activeCard, setActiveCard] = useState(0);
   const entries = {
      about: useRef(),
      skills: useRef(),
      experience: useRef(),
      portfolio: useRef(),
      contact: useRef(),
   };

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
            entries,
            darkTheme,
            parallax,
            scroll,
            setActiveCard,
            setDarkTheme,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
