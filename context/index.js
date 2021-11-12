import React, { createContext, useRef, useState } from "react";
import { setClassName } from "../helpers/setClassName";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
   /* Controls whether user has selected dark or light theme */
   const [isDark, setIsDark] = useState(false);

   /* Index of card present in the viewport */
   const [activeCard, setActiveCard] = useState(0);

   /* Triggers Mobile Menu */
   const [isActivated, setIsActivated] = useState(false);

   const parallax = useRef(null);

   const contentRefs = {
      about: useRef(),
      skills: useRef(),
      experience: useRef(),
      portfolio: useRef(),
      contact: useRef(),
   };

   const scroll = (card, title) => {
      const key = title.toLowerCase();

      if (parallax.current) {
         parallax.current.scrollTo(card);
         setActiveCard(card);
         setIsActivated(false);
         return;
      }

      contentRefs[key].current.node.scrollIntoView({
         block: "start",
         behavior: "smooth",
      });

      setIsActivated(false);
   };

   return (
      <AppContext.Provider
         value={{
            activeCard,
            contentRefs,
            isActivated,
            isDark,
            parallax,
            scroll,
            setActiveCard,
            setClassName,
            setIsActivated,
            setIsDark,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
