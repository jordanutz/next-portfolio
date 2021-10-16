import { FC } from "react";
import { NavItem } from "../NavItem";

import { AiOutlineMail } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
import { IoIosRocket } from "react-icons/Io";
import { MdLaptopMac, MdVideogameAsset } from "react-icons/md";

import styles from "./Navigation.module.css";

export const Navigation: FC = () => {
   return (
      <nav className={styles.navigation}>
         <ul className={styles.navigation__list}>
            <NavItem
               icon={<MdVideogameAsset />}
               onClick={() => console.log("#About")}
            />
            <NavItem
               active={true}
               icon={<MdLaptopMac />}
               onClick={() => console.log("#Skills")}
            />
            <NavItem
               icon={<IoIosRocket />}
               onClick={() => console.log("#Work")}
            />
            <NavItem
               icon={<HiCode />}
               onClick={() => console.log("#Portfolio")}
            />
            <NavItem
               icon={<AiOutlineMail />}
               onClick={() => console.log("#Contact")}
            />
         </ul>
      </nav>
   );
};
