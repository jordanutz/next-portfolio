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
               title="About"
               onClick={() =>
                  context.handleSmoothScroll(context.entries.about.current)
               }
               ref={context.entries.about}
            />
            <NavItem
               icon={<MdLaptopMac />}
               title="Skills"
               onClick={() =>
                  context.handleSmoothScroll(context.entries.skills.current)
               }
               ref={context.entries.skills}
            />
            <NavItem
               icon={<IoIosRocket />}
               onClick={() =>
                  context.handleSmoothScroll(context.entries.experience.current)
               }
               title="Experience"
               ref={context.entries.experience}
            />
            <NavItem
               icon={<HiCode />}
               onClick={() =>
                  context.handleSmoothScroll(context.entries.portfolio.current)
               }
               title="Portfolio"
               ref={context.entries.portfolio}
            />
            <NavItem
               icon={<AiOutlineMail />}
               onClick={() =>
                  context.handleSmoothScroll(context.entries.contact.current)
               }
               title="Contact"
               ref={context.entries.contact}
            />
         </ul>
      </nav>
   );
};
