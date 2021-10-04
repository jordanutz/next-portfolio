// our-domain.com/
import React, { useRef } from "react";
import Head from "next/head";

import { Aside } from "../components/Aside";
import { About } from "../components/About";
import { Steps } from "../components/Steps";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";

export default function Index() {
   const about = useRef();
   const skills = useRef();
   const portfolio = useRef();
   const contact = useRef();

   return (
      <div>
         <Head>
            <link rel="stylesheet" href="https://use.typekit.net/spe1skb.css" />
         </Head>
         <Aside />
         <main>
            <Steps />
            <section>
               <About />
               <Skills />
               <Experience />
               <Portfolio />
            </section>
         </main>
      </div>
   );
}
