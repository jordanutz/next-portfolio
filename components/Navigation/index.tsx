import { FC } from "react";
import { NavItem } from "../NavItem";

import { HiCode } from "react-icons/hi";
import { IoIosRocket } from "react-icons/Io";
import { MdLaptopMac, MdVideogameAsset } from "react-icons/md";
import { SiMailDotRu } from "react-icons/si";

import styles from "./Navigation.module.css";

export const Navigation: FC = () => {
   return (
      <nav className={styles.navigation}>
         <ul className={styles.navigation__list}>
            <NavItem
               icon={<MdVideogameAsset />}
               onClick={() => console.log("#About")}
            ></NavItem>
            <NavItem
               active={true}
               icon={<MdLaptopMac />}
               onClick={() => console.log("#Skills")}
            ></NavItem>
            <NavItem
               icon={<IoIosRocket />}
               onClick={() => console.log("#Work")}
            ></NavItem>
            <NavItem
               icon={<HiCode />}
               onClick={() => console.log("#Portfolio")}
            ></NavItem>
            <NavItem
               icon={<SiMailDotRu />}
               onClick={() => console.log("#Contact")}
            ></NavItem>
         </ul>
      </nav>
   );
};
