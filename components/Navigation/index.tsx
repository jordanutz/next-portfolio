import { NavItem } from "../NavItem";

import { AiOutlineMail } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
import { IoIosRocket } from "react-icons/io";
import { MdLaptopMac, MdVideogameAsset } from "react-icons/md";

export const Navigation = () => (
   <nav className="navigation__nav">
      <ul className="navigation__list">
         <NavItem icon={<MdVideogameAsset />} title="About" card={1} />
         <NavItem icon={<MdLaptopMac />} title="Skills" card={2} />
         <NavItem icon={<IoIosRocket />} title="Experience" card={3} />
         <NavItem icon={<HiCode />} title="Portfolio" card={4} />
         <NavItem icon={<AiOutlineMail />} title="Contact" card={5} />
      </ul>
   </nav>
);
