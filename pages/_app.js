import { AppProvider } from "../context";

/* Stylesheets */
import "../styles/globals.css";
import "../styles/about.css";
import "../styles/anchor.css";
import "../styles/button.css";
import "../styles/carousel.css";
import "../styles/contact.css";
import "../styles/container.css";
import "../styles/experience.css";
import "../styles/footer.css";
import "../styles/pageheader.css";
import "../styles/projects.css";
import "../styles/reset.css";
import "../styles/skills.css";
import "../styles/social.css";
import "../styles/tag.css";
import "../styles/title.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
