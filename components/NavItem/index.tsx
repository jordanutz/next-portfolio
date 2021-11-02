import { FC, forwardRef } from "react";
import useAppContext from "../../context/useContext";

import { Button } from "../Button";
import { NavItemProps } from "../../models/navitem";

export const NavItem: FC<NavItemProps> = forwardRef<HTMLElement, NavItemProps>(
   ({ title, inView, ...rest }, forwardRef) => {
      const { activeCard } = useAppContext();

      const modifiers = {
         active: "nav-item--active",
      };

      const generateActiveClass = () => {
         if (activeCard) return;

         // if (context.activeCard.current.id === forwardRef.current.id) {
         //    return styles[modifiers.active];
         // }
      };

      return (
         <li className={`navItem ${generateActiveClass()}`}>
            <Button type="link" {...rest} aria-label={title} />
         </li>
      );
   }
);

NavItem.displayName = "NavItem";
