import React from "react";
import useAppContext from "../../context/useContext";

import Toggle from "react-toggle";
import { Block } from "../Block";
import { HiMoon, HiSun } from "react-icons/hi";

export const Switch = () => {
   const { isDark, setIsDark } = useAppContext();

   const displayIcon = isDark ? (
      <HiMoon className="switch__icon" aria-label="Toggle Dark Theme" />
   ) : (
      <HiSun
         className="switch__icon switch__icon--sun"
         aria-label="Toggle Light Theme"
      />
   );

   const handleToggleTheme = () => setIsDark(!isDark);

   return (
      <Block className="switch">
         <label htmlFor="theme-toggle">{displayIcon}</label>
         <Toggle
            checked={isDark}
            icons={false}
            id="theme-toggle"
            onChange={handleToggleTheme}
         />
      </Block>
   );
};
