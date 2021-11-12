import { Button } from "../Button";
import { NavItemProps } from "../../models/navitem";

import useAppContext from "../../context/useContext";

export const NavItem = ({ title, inView, card, ...rest }: NavItemProps) => {
   const { activeCard, scroll, setClassName } = useAppContext();
   return (
      <li
         className={`navItem ${setClassName(
            activeCard === card,
            "nav-item--active"
         )}`}
      >
         <Button
            type="link"
            onClick={() => scroll(card, title)}
            aria-label={title}
            {...rest}
         />
      </li>
   );
};
