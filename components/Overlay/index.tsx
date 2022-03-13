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
         <div className="overlay__menu">
            <Menu />
            <Navigation />
         </div>
         {isActivated && (
            <div className="overlay__switch">
               <Switch />
            </div>
         )}
      </section>
   );
};
