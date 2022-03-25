import { FC } from "react";
import { InView } from "react-intersection-observer";
import { ContainerProps } from "../../models/container";

import useAppContext from "../../context/useContext";
import WithParallaxWrapper from "../../hocs/WithParallaxWrapper";

const Container: FC<ContainerProps> = ({ id, children, offset }) => {
   const { setActiveCard, contentRefs } = useAppContext();

   return (
      <InView
         threshold={0.5}
         onChange={(inView) => inView && setActiveCard(offset)}
         ref={contentRefs[id]}
      >
         {({ ref }) => {
            return (
               <section className="container" id={id} ref={ref}>
                  <div className="container__step container__step--animate" />
                  {children}
               </section>
            );
         }}
      </InView>
   );
};

export default WithParallaxWrapper(Container);
