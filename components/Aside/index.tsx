import useAppContext from "../../context/useContext";

import { Card } from "../Card";
import { Details } from "../Details";

import MainImg from "../../public/main.jpg";

export const Aside = () => {
   const { isTitleInView } = useAppContext();

   return (
      <aside className="aside">
         <Card
            image={MainImg.src}
            showArrow={false}
            className={
               isTitleInView ? "aside__card aside__card--hidden" : "aside__card"
            }
         >
            <Details />
         </Card>
      </aside>
   );
};
