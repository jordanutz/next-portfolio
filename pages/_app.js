import { AppProvider } from "../context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
   console.log(AppProvider);
   return (
      <AppProvider>
         <Component {...pageProps} />
      </AppProvider>
   );
}

export default MyApp;
