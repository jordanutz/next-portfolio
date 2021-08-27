// our-domain.com/
import Head from "next/head";
import { Aside } from "../components/Aside";
import { About } from "../components/About";
import { Steps } from "../components/Steps";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Portfolio } from "../components/Portfolio";

export default function Index() {
   return (
      <div>
         <Head>
            <link rel="stylesheet" href="https://use.typekit.net/spe1skb.css" />
         </Head>
         <Aside />
         <main>
            <Steps />
            <div>
               <About />
               <Skills />
               <Experience />
               <Portfolio />
            </div>
         </main>
      </div>
   );
}
