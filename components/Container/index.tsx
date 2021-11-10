import { FC } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import { ContainerProps } from "../../models/container";
import { isMobile, useDeviceSelectors } from "react-device-detect";

import useAppContext from "../../context/useContext";

export const Container: FC<ContainerProps> = ({ id, children, offset }) => {
   const { setActiveCard } = useAppContext();
   const [selectors, data] = useDeviceSelectors(window.navigator.userAgent);

   const isMobileContainer = selectors.isMobile ? (
      <ParallaxLayer
         offset={offset}
         style={{
            display: "flex",
            alignItems: "center",
         }}
         factor={1}
      >
         <InView
            threshold={0.5}
            onChange={(inView) => inView && setActiveCard(offset)}
         >
            {({ inView, ref }) => {
               return (
                  <section className="container" id={id} ref={ref}>
                     <section className="container__step container__step--animate" />
                     {children}
                  </section>
               );
            }}
         </InView>
      </ParallaxLayer>
   ) : (
      <h1>Mobile</h1>
   );

   return isMobileContainer;
};
