import { FC, forwardRef } from "react";
import useAppContext from "../../context/useContext";

import { InView } from "react-intersection-observer";
import { ParallaxLayer } from "@react-spring/parallax";

import { Steps } from "../Steps";

interface ContainerProps {
   id: string;
   offset: number;
   ref: any;
}

export const Container: FC<ContainerProps> = forwardRef<any, ContainerProps>(
   ({ id, children, offset }, forwardRef) => {
      const { setActiveCard } = useAppContext();

      const modifiers = {
         animate: "container__step--animate",
      };

      return (
         <ParallaxLayer
            style={{
               display: "flex",
               alignItems: "center",
            }}
            ref={forwardRef}
            offset={offset}
         >
            <InView
               threshold={0.5}
               onChange={(inView) => inView && setActiveCard(forwardRef)}
            >
               {({ inView, ref }) => {
                  return (
                     <section className="container" id={id} ref={ref}>
                        <section
                           className={`container__step ${modifiers.animate}`}
                        />
                        {children}
                     </section>
                  );
               }}
            </InView>
         </ParallaxLayer>
      );
   }
);

Container.displayName = "Container";
