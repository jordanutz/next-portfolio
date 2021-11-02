import { AppProvider } from "../context";

/* Stylesheets */
import "../styles/globals.css";
import "../styles/about.css";
import "../styles/anchor.css";
import "../styles/aside.css";
import "../styles/button.css";
import "../styles/card.css";
import "../styles/carousel.css";
import "../styles/contact.css";
import "../styles/container.css";
import "../styles/cover.css";
import "../styles/experience.css";
import "../styles/navigation.css";
import "../styles/navitem.css";
import "../styles/pageheader.css";
import "../styles/portfolio.css";
import "../styles/skills.css";
import "../styles/social.css";
import "../styles/steps.css";
import "../styles/tag.css";
import "../styles/title.css";
import "../styles/typewriter.css";

function MyApp({ Component, pageProps }) {
   return (
      <AppProvider>
         <Component {...pageProps} />
      </AppProvider>
   );
}

export default MyApp;
