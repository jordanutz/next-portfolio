import Head from "next/head";

import { useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { NavigationContainer } from "../components/NavigationContainer";
import { Aside } from "../components/Aside";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Menu } from "../components/Menu";
import { Mobile } from "../components/Mobile";
import { Navigation } from "../components/Navigation";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import { Title } from "../components/Title";

import useAppContext from "../context/useContext";

const Index = () => {
   const { isActivated, isDark, parallax } = useAppContext();

   return (
      <div>
         <Head>
            <link rel="stylesheet" href="https://use.typekit.net/spe1skb.css" />
         </Head>
         <main className="content">
            <Parallax
               pages={6}
               ref={parallax}
               className={isDark ? "dark" : ""}
               enabled={!isActivated}
            >
               <Title offset={0} />
               <ParallaxLayer
                  offset={0}
                  sticky={{ start: 0, end: 6 }}
                  className={`menu__layer ${
                     isActivated ? "menu--overlay" : ""
                  }`}
                  style={{ width: isActivated ? "100%" : "5%" }}
               >
                  <Mobile />
               </ParallaxLayer>
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
