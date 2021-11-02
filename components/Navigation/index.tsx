import { FC } from "react";
import useAppContext from "../../context/useContext";

import { NavItem } from "../NavItem";

import { AiOutlineMail } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
import { IoIosRocket } from "react-icons/Io";
import { MdLaptopMac, MdVideogameAsset } from "react-icons/md";

export const Navigation: FC = () => {
   const { entries } = useAppContext();

   return (
      <nav className="navigation">
         <ul className="navigation__list">
            <NavItem
               icon={<MdVideogameAsset />}
               title="About"
               ref={entries.about}
            />
            <NavItem
               icon={<MdLaptopMac />}
               title="Skills"
               ref={entries.skills}
            />
            <NavItem
               icon={<IoIosRocket />}
               title="Experience"
               ref={entries.experience}
            />
            <NavItem
               icon={<HiCode />}
               title="Portfolio"
               ref={entries.portfolio}
            />
            <NavItem
               icon={<AiOutlineMail />}
               title="Contact"
               ref={entries.contact}
            />
         </ul>
      </nav>
   );
};
