import useAppContext from "../../context/useContext";
import { Button } from "../Button";
import { NavItemProps } from "../../models/navitem";

export const NavItem = ({ title, inView, card, ...rest }: NavItemProps) => {
   const { activeCard, scroll } = useAppContext();

   const generateActiveClass = () => {
      if (!activeCard) return;

      if (activeCard === card) {
         return "nav-item--active";
      }
   };

   return (
      <li className={`navItem ${generateActiveClass()}`}>
         <Button
            type="link"
            onClick={() => scroll(card)}
            aria-label={title}
            {...rest}
         />
      </li>
   );
};

NavItem.displayName = "NavItem";
