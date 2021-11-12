import { isMobileOnly } from "react-device-detect";
import { ParallaxLayer } from "@react-spring/parallax";

const WithParallaxWrapper = (Component) => {
   return function ({ factor = 1, offset, ...rest }) {
      const content = isMobileOnly ? (
         <Component offset={offset} {...rest} />
      ) : (
         <ParallaxLayer
            className="parallax-wrapper"
            factor={factor}
            offset={offset}
         >
            <Component offset={offset} {...rest} />
         </ParallaxLayer>
      );

      return content;
   };
};

export default WithParallaxWrapper;
