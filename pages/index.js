import Head from "next/head";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { isMobileOnly } from "react-device-detect";

import { About } from "../components/About";
import { Aside } from "../components/Aside";
import { Experience } from "../components/Experience";
import { NavigationContainer } from "../components/NavigationContainer";
import { Overlay } from "../components/Overlay";
import { Portfolio } from "../components/Portfolio";
import { Skills } from "../components/Skills";

import WithContactWrapped from "../components/Contact";
import WithTitleWrapped from "../components/Title";

import useAppContext from "../context/useContext";

const Index = () => {
   const { isActivated, isDark, parallax, setClassName } = useAppContext();

   const pageContent = (
      <>
         <WithTitleWrapped offset={null} />
         <Overlay />
         <About />
         <Skills />
         <Experience />
         <Portfolio />
         <WithContactWrapped offset={5} id="contact" />
      </>
   );

   return (
      <div>
         <Head>
            <link rel="stylesheet" href="https://use.typekit.net/spe1skb.css" />
            <link rel="preload" href="/Mockhand.ttf" as="font" crossOrigin="" />
            <link
               rel="preload"
               href="/MuseoSans_500.otf"
               as="font"
               crossOrigin=""
            />
            <title>Jordan Utz | Front End Software Engineer</title>
            <meta
               name="description"
               content="Jordan Utz is a Front End Software Engineer based in St. Petersburg, Florida with three years of professional development experience architecting scalable JavaScript applications."
            />
            <meta name="siteUrl" content="https://jordanutz.dev" />
         </Head>
         <main className={`content ${setClassName(isDark, "dark")}`}>
            {isMobileOnly ? (
               <>{pageContent}</>
            ) : (
               <Parallax pages={6} ref={parallax} enabled={!isActivated}>
                  <ParallaxLayer
                     className={`overlay ${setClassName(
                        isActivated,
                        "overlay--active"
                     )}`}
                     sticky={{ start: 0, end: 6 }}
                  >
                     <Overlay />
                  </ParallaxLayer>
                  <ParallaxLayer
                     className="parallax-layer__desktop"
                     sticky={{ start: 0, end: 5 }}
                  >
                     <NavigationContainer />
                  </ParallaxLayer>
                  <ParallaxLayer
                     className="parallax-layer__aside"
                     sticky={{ start: 1, end: 4 }}
                  >
                     <Aside />
                  </ParallaxLayer>
                  {pageContent}
               </Parallax>
            )}
         </main>
      </div>
   );
};
export default Index;
