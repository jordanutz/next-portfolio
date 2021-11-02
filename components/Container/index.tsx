import { ParallaxLayer } from "@react-spring/parallax";
import { FC, forwardRef, useContext } from "react";
import { AppContext } from "../../context";
import { InView } from "react-intersection-observer";
import styles from "./Container.module.css";

interface ContainerProps {
   id: string;
   offset?: number;
   ref: any;
}

export const Container: FC<ContainerProps> = forwardRef<
   HTMLElement,
   ContainerProps
>(({ id, children, offset }, forwardRef) => {
   const context = useContext(AppContext);

   const modifiers = {
      animate: "container__step--animate",
   };

   return (
      <ParallaxLayer
         style={{
            display: "flex",
            alignItems: "center",
         }}
         offset={offset}
      >
         <InView
            threshold={0.5}
            onChange={(inView) => inView && context.setActiveCard(forwardRef)}
         >
            {({ inView, ref }) => {
               return (
                  <section ref={forwardRef} id={id}>
                     <section className={styles.container} ref={ref}>
                        <section
                           className={`${styles.container__step} ${
                              inView ? styles[modifiers.animate] : "".trim()
                           }`}
                        ></section>
                        <section ref={forwardRef} style={{ width: "100%" }}>
                           {children}
                        </section>
                     </section>
                  </section>
               );
            }}
         </InView>
      </ParallaxLayer>
   );
});

Container.displayName = "Container";
