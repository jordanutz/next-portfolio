import useAppContext from "../../context/useContext";
import { Menu } from "../Menu";
import { Navigation } from "../Navigation";
import { Switch } from "../Switch";

export const Mobile = () => {
   const { isActivated } = useAppContext();

   return (
      <section className="menu__layer">
         <section className="menu">
            <Menu />
            <Navigation />
         </section>
         {isActivated && (
            <section className="mobile__switch">
               <Switch />
            </section>
         )}
      </section>
   );
};
