import React, { createContext, useRef, useState } from "react";
import styles from "../styles/dark.module.css";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
   const entries = {
      about: useRef(),
      skills: useRef(),
      experience: useRef(),
      portfolio: useRef(),
      contact: useRef(),
   };

   const [activeCard, setActiveCard] = useState(null);
   const [showNav, setShowNav] = useState(false);
   const [isContactInView, setIsContactInView] = useState(false);

   // Dark Theme Controls
   const [darkTheme, setDarkTheme] = useState(true);
   const handleSmoothScroll = (id) =>
      id.scrollIntoView({ block: "start", behavior: "smooth" });

   return (
      <AppContext.Provider
         value={{
            entries,
            handleSmoothScroll,
            activeCard,
            setActiveCard,
            showNav,
            setShowNav,
            darkTheme,
            setDarkTheme,
            isContactInView,
            setIsContactInView,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
