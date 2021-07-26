// our-domain.com/
import Head from "next/head";
import { Aside } from "../components/Aside";
import { About } from "../components/About";

export default function Index() {
   return (
      <div>
         <Head>
            <link rel="stylesheet" href="https://use.typekit.net/spe1skb.css" />
         </Head>
         <main>
            <Aside />
            <About />
         </main>
      </div>
   );
}
