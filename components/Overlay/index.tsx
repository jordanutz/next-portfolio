import { useState, useEffect } from "react";
import { Menu } from "../Menu";
import { Navigation } from "../Navigation";
import { Switch } from "../Switch";

import useAppContext from "../../context/useContext";
import { isMobileOnly } from "react-device-detect";

export const Overlay = () => {
   const { isActivated, setClassName } = useAppContext();
   const [isVisible, setIsVisible] = useState(true);

   const handleScroll = () => {
      let heightToHideFrom = 1000;

      const winScroll = document.body.scrollTop || 
      document.documentElement.scrollTop;
      console.log('fire')
      console.log(winScroll);
   }

   useEffect(() => {
      console.log('test')
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
