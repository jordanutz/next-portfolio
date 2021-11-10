import { ParallaxLayer } from "@react-spring/parallax";

import { Menu } from "../Menu";
import { Navigation } from "../Navigation";
import { Switch } from "../Switch";

import useAppContext from "../../context/useContext";

export const Overlay = () => {
   const { isActivated } = useAppContext();

   return (
      <ParallaxLayer
         offset={0}
         sticky={{ start: 0, end: 6 }}
         className={`overlay ${isActivated ? "overlay--active" : ""}`}
         style={{ width: isActivated ? "100%" : "5%" }}
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
      </ParallaxLayer>
   );
};
