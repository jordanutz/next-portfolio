import React from "react";
import Head from "next/head";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Aside } from "../components/Aside";
import { About } from "../components/About";
import { Steps } from "../components/Steps";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import { Title } from "../components/Title";

const Index = () => (
   <div>
      <Head>
         <link rel="stylesheet" href="https://use.typekit.net/spe1skb.css" />
      </Head>
      <main className="content">
         <Parallax pages={6} innerStyle={{ zIndex: 9 }}>
            <Title />
            <ParallaxLayer
               sticky={{ start: 1, end: 4 }}
               style={{ width: "25%", zIndex: 10 }}
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

export default Index;
