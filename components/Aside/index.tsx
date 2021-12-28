import { useEffect, useRef } from "react";
import useAppContext from "../../context/useContext";

import { Card } from "../Card";
import { Details } from "../Details";

import MainImg from "../../public/main.webp";

export const Aside = () => {
   const { isTitleInView } = useAppContext();
   const asideRef = useRef<HTMLElement>();

   useEffect(() => {
      const currentVal = asideRef.current;

      if (currentVal && isTitleInView) {
         currentVal.classList.add("aside--hidden");
         currentVal.classList.remove("aside--display");
      } else if (currentVal && !isTitleInView) {
         currentVal.classList.add("aside--display");
         currentVal.classList.remove("aside--hidden");
      }
   }, [isTitleInView]);

   return (
      <aside className="aside" ref={asideRef}>
         <Card image={MainImg.src} showArrow={false} className="aside__card">
            <Details />
         </Card>
      </aside>
   );
};
