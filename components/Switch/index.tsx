import React, { FC } from "react";
import useAppContext from "../../context/useContext";
import Toggle from "react-toggle";
import { Block } from "../Block";

export const Switch = () => {
   const { isDark, setIsDark } = useAppContext();

   const displayText = isDark ? "Dark" : "Light";

   const handleToggleTheme = () => setIsDark(!isDark);

   return (
      <Block className="switch">
         <Toggle
            id="theme-toggle"
            onChange={handleToggleTheme}
            value={isDark}
            icons={false}
            checked={isDark}
         />
         <label htmlFor="theme-toggle">{displayText}</label>
      </Block>
   );
};
