import { FC, forwardRef } from "react";
import { Button } from "../Button";
import { NavItemProps } from "../../models/navitem";

import styles from "./NavItem.module.css";

export const NavItem: FC<NavItemProps> = forwardRef(
   ({ active, children, ...rest }) => (
      <li className={`${styles.navItem}`}>
         <Button type="link" {...rest}>
            {children}
         </Button>
      </li>
   )
);

NavItem.displayName = "NavItem";
