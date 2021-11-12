import { isMobileOnly } from "react-device-detect";

import { Menu } from "../Menu";
import { Navigation } from "../Navigation";
import { Switch } from "../Switch";

import useAppContext from "../../context/useContext";

export const Overlay = () => {
   const { isActivated, setClassName } = useAppContext();

   return (
      <section
         className={`${
            isMobileOnly
               ? `overlay ${setClassName(isActivated, "overlay--active")}`
               : "overlay-tablet"
         }`}
      >
         <section className="overlay__menu">
            <Menu />
            <Navigation />
         </section>
         {isActivated && (
            <section className="overlay__switch">
               <Switch />
            </section>
         )}
      </section>
   );
};
