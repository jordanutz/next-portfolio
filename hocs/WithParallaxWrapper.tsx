import { isMobile } from "react-device-detect";
import { ParallaxLayer } from "@react-spring/parallax";

const WithParallaxWrapper = (Component) => {
   return function ({ factor = 1, offset, ...rest }) {
      const content = isMobile ? (
         <Component {...rest} />
      ) : (
         <ParallaxLayer
            factor={factor}
            className="parallax-wrapper"
            offset={offset}
            {...rest}
         >
            <Component {...rest} />
         </ParallaxLayer>
      );

      return content;
   };
};

export default WithParallaxWrapper;
