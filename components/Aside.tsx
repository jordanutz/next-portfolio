import { useEffect, useRef } from "react";
import useAppContext from "../context/useContext";

import { Card } from "./Card";
import { Details } from "./Details";

import MainImg from "../public/main.webp";

export const Aside = () => {
  const { activeCard } = useAppContext();
  const asideRef = useRef<HTMLElement>();

  useEffect(() => {
    const currentVal = asideRef.current;

    setTimeout(() => {
      currentVal.classList.remove("preload");
    }, 1000);

    if (currentVal && !activeCard) {
      currentVal.classList.add("aside--hidden");
      currentVal.classList.remove("aside--display");
    } else if (currentVal && activeCard) {
      currentVal.classList.add("aside--display");
      currentVal.classList.remove("aside--hidden");
    }
  }, [activeCard]);

  return (
    <aside className="aside preload" ref={asideRef}>
      <Card image={MainImg.src} showArrow={false} className="aside__card">
        <Details />
      </Card>
    </aside>
  );
};
