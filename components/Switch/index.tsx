import React from "react";
import useAppContext from "../../context/useContext";
import Toggle from "react-toggle";

export const Switch = () => {
   const { isDark, setIsDark } = useAppContext();

   const displayText = isDark ? "Dark" : "Light";

   const handleToggleTheme = () => setIsDark(!isDark);

   return (
      <section className="switch">
         <Toggle
            id="theme-toggle"
            onChange={handleToggleTheme}
            value={isDark}
            icons={false}
         />
         <label htmlFor="theme-toggle">{displayText}</label>
      </section>
   );
};
