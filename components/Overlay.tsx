import { useState, useEffect } from "react";
import useAppContext from "../context/useContext";

import { Menu } from "./Menu";
import { Navigation } from "./Navigation";
import { Switch } from "./Swich";

import { isMobileOnly } from "react-device-detect";

export const Overlay = () => {
   const { isActivated, setClassName } = useAppContext();
   const [ isVisible ] = useState(true);

   const handleScroll = () => {

      const winScroll = document.body.scrollTop || 
      document.documentElement.scrollTop;
   }

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [])

   const showOverlayMenu = () => isVisible && (
      <div className="overlay__menu">
         <Menu />
         <Navigation />
      </div>
   );

   const showSwitch = () => isActivated && (
      <div className="overlay__switch">
         <Switch />
      </div>
   );

   return (
      <section
         className={`${
            isMobileOnly
               ? `overlay ${setClassName(isActivated, "overlay--active")}`
               : "overlay-tablet"
         }`}
      >
         {showOverlayMenu()}
         {showSwitch()}
      </section>
   );
};
