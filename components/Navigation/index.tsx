import { FC, useContext } from "react";
import { AppContext } from "../../context";
import { NavItem } from "../NavItem";

import { AiOutlineMail } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
import { IoIosRocket } from "react-icons/Io";
import { MdLaptopMac, MdVideogameAsset } from "react-icons/md";

import styles from "./Navigation.module.css";

export const Navigation: FC = () => {
   const context = useContext(AppContext);
   return (
      <nav className={styles.navigation}>
         <ul className={styles.navigation__list}>
            <NavItem
               icon={<MdVideogameAsset />}
               onClick={() => context.handleSmoothScroll(context.about.current)}
            />
            <NavItem
               active={true}
               icon={<MdLaptopMac />}
               onClick={() =>
                  context.handleSmoothScroll(context.skills.current)
               }
            />
            <NavItem
               icon={<IoIosRocket />}
               onClick={() =>
                  context.handleSmoothScroll(context.experience.current)
               }
            />
            <NavItem
               icon={<HiCode />}
               onClick={() =>
                  context.handleSmoothScroll(context.portfolio.current)
               }
            />
            <NavItem
               icon={<AiOutlineMail />}
               onClick={() =>
                  context.handleSmoothScroll(context.contact.current)
               }
            />
         </ul>
      </nav>
   );
};
