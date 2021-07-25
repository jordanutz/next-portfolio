import { FC } from "react";
import { Button } from "../Button";
import { NavItemProps } from "../../models/navitem";

import styles from "./NavItem.module.css";

export const NavItem: FC<NavItemProps> = ({ active, children, ...rest }) => {
   const isActive = active ? "navItem--active" : "";

   return (
      <li className={`${styles.navItem} ${styles[isActive]}`}>
         <Button type="link" {...rest}>
            {children}
         </Button>
      </li>
   );
};
