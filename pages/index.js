// our-domain.com/
import React, { useRef } from "react";
import Head from "next/head";
import { InView } from "react-intersection-observer";

import { Cover } from "../components/Cover";
import { Aside } from "../components/Aside";
import { About } from "../components/About";
import { Steps } from "../components/Steps";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import { Title } from "../components/Title";

import ContactImg from "../assets/contact.jpg";

const Index = () => (
   <div>
      <Head>
         <link rel="stylesheet" href="https://use.typekit.net/spe1skb.css" />
      </Head>
      <Aside />
      <main>
         <Title />
         <section className="content">
            <Steps />
            <section>
               <About />
               <Skills />
               <Experience />
               <Portfolio />
            </section>
         </section>
         <Cover image={ContactImg.src}>
            <Contact />
         </Cover>
      </main>
   </div>
);

export default Index;
