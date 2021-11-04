import React from "react";
import useAppContext from "../context/useContext";
import Head from "next/head";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Navigation } from "../components/Navigation";
import { Aside } from "../components/Aside";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import { Title } from "../components/Title";

const Index = () => {
   const { parallax, isDark } = useAppContext();

   return (
      <div>
         <Head>
            <link rel="stylesheet" href="https://use.typekit.net/spe1skb.css" />
         </Head>
         <main className="content">
            <Parallax pages={6} ref={parallax} className={isDark ? "dark" : ""}>
               <Title offset={0} />
               <ParallaxLayer
                  offset={0}
                  sticky={{ start: 0, end: 5 }}
                  style={{ display: "flex", width: "10%", zIndex: 3 }}
               >
                  <Navigation />
               </ParallaxLayer>
               <ParallaxLayer
                  sticky={{ start: 1, end: 4 }}
                  style={{ width: "25%", zIndex: 2 }}
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
