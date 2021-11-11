import Head from "next/head";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { isMobile } from "react-device-detect";

import { Aside } from "../components/Aside";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { NavigationContainer } from "../components/NavigationContainer";
import { Overlay } from "../components/Overlay";
import { Portfolio } from "../components/Portfolio";
import { Skills } from "../components/Skills";

import WithTitleWrapped from "../components/Title";
import WithContactWrapped from "../components/Contact";

import useAppContext from "../context/useContext";

const Index = () => {
   const { isActivated, isDark, parallax } = useAppContext();

   const content = (
      <>
         <WithTitleWrapped offset={null} />
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
         </Head>
         <main className="content">
            {isMobile ? (
               <>{content}</>
            ) : (
               <Parallax
                  pages={6}
                  ref={parallax}
                  className={isDark ? "dark" : "test"}
                  enabled={!isActivated}
               >
                  <Overlay />
                  <ParallaxLayer
                     offset={0}
                     sticky={{ start: 0, end: 5 }}
                     style={{ display: "flex", width: "10%", zIndex: 3 }}
                     className="layer--desktop"
                  >
                     <NavigationContainer />
                  </ParallaxLayer>
                  <ParallaxLayer
                     sticky={{ start: 1, end: 4 }}
                     style={{ width: "25%", zIndex: 2 }}
                     className="layer--aside"
                  >
                     <Aside />
                  </ParallaxLayer>
                  {content}
               </Parallax>
            )}
         </main>
      </div>
   );
};
export default Index;
