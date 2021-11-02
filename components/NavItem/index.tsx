import { FC, forwardRef, useContext, useEffect, useCallback } from "react";
import { AppContext } from "../../context";
import { Button } from "../Button";
import { NavItemProps } from "../../models/navitem";

import styles from "./NavItem.module.css";

export const NavItem: FC<NavItemProps> = forwardRef<HTMLElement, NavItemProps>(
   ({ title, inView, ...rest }, ref) => {
      const context = useContext(AppContext);

      const modifiers = {
         active: "nav-item--active",
      };

      const generateActiveClass = () => {
         if (!context.activeCard) return;

         // if (context.activeCard.current.id === ref.current.id) {
         //    return styles[modifiers.active];
         // }
      };

      return (
         <li className={`${styles.navItem} ${generateActiveClass()}`}>
            <Button type="link" {...rest} aria-label={title} />
         </li>
      );
   }
);

NavItem.displayName = "NavItem";
