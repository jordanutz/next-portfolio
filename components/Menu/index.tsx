import { Button } from "../Button";
import { Block } from "../Block";

import { IoIosMenu, IoMdClose } from "react-icons/io";

import useAppContext from "../../context/useContext";

export const Menu = () => {
   const { isActivated, setIsActivated } = useAppContext();
   const handleActivateMenu = () => setIsActivated(!isActivated);

   return (
      <Block className={isActivated ? "block--activated" : ""}>
         <Button
            icon={isActivated ? <IoMdClose /> : <IoIosMenu />}
            onClick={handleActivateMenu}
         />
      </Block>
   );
};
