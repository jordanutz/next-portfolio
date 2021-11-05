import { NavItem } from "../NavItem";
import { Switch } from "../Switch";
import { Button } from "../Button";
import { Block } from "../Block";

import { AiOutlineMail } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
import { IoIosRocket, IoIosMenu } from "react-icons/Io";
import { MdLaptopMac, MdVideogameAsset } from "react-icons/md";

export const Navigation = () => (
   <section className="navigation__container">
      <Block className="menu">
         <Button icon={<IoIosMenu />} />
      </Block>
      <Switch />
      <nav className="navigation__nav">
         <ul className="navigation__list">
            <NavItem icon={<MdVideogameAsset />} title="About" card={1} />
            <NavItem icon={<MdLaptopMac />} title="Skills" card={2} />
            <NavItem icon={<IoIosRocket />} title="Experience" card={3} />
            <NavItem icon={<HiCode />} title="Portfolio" card={4} />
            <NavItem icon={<AiOutlineMail />} title="Contact" card={5} />
         </ul>
      </nav>
   </section>
);
