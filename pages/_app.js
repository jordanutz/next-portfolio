import { AppProvider } from "../context";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
   return (
      <ParallaxProvider>
         <AppProvider>
            <Component {...pageProps} />
         </AppProvider>
      </ParallaxProvider>
   );
}

export default MyApp;
