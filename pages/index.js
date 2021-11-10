import Head from "next/head";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { Aside } from "../components/Aside";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { NavigationContainer } from "../components/NavigationContainer";
import { Overlay } from "../components/Overlay";
import { Portfolio } from "../components/Portfolio";
import { Skills } from "../components/Skills";
import { Title } from "../components/Title";

import useAppContext from "../context/useContext";

const Index = () => {
   const { isActivated, isDark, parallax } = useAppContext();

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
            <Parallax
               pages={6}
               ref={parallax}
               className={isDark ? "dark" : ""}
               enabled={!isActivated}
            >
               <Title offset={0} />
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
               <About />
               <Skills />
               <Experience />
               <Portfolio />
               <Contact />
            </Parallax>
         </main>
      </div>
   );
};
export default Index;
