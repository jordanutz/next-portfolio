import { AppProvider } from "../context";

/* Stylesheets */
import "../styles/globals.css";
import "../styles/about.css";
import "../styles/anchor.css";
import "../styles/aside.css";
import "../styles/block.css";
import "../styles/button.css";
import "../styles/card.css";
import "../styles/carousel.css";
import "../styles/contact.css";
import "../styles/container.css";
import "../styles/cover.css";
import "../styles/dark-theme.css";
import "../styles/experience.css";
import "../styles/footer.css";
import "../styles/menu.css";
import "../styles/loader.css";
import "../styles/navigation.css";
import "../styles/navitem.css";
import "../styles/overlay.css";
import "../styles/pageheader.css";
import "../styles/parallax.css";
import "../styles/projects.css";
import "../styles/skills.css";
import "../styles/social.css";
import "../styles/switch.css";
import "../styles/tag.css";
import "../styles/title.css";
import "../styles/typewriter.css";
import "react-toggle/style.css";

function MyApp({ Component, pageProps }) {
   return (
      <AppProvider>
         <Component {...pageProps} />
      </AppProvider>
   );
}

export default MyApp;
