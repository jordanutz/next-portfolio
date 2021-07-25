// our-domain.com/
import Head from "next/head";
import { PageHeader } from "../components/PageHeader";
import { Aside } from "../components/Aside";
import { Tag } from "../components/Tag";

import { SiJavascript } from "react-icons/Si";

export default function Index() {
   return (
      <div>
         <Head>
            <link rel="stylesheet" href="https://use.typekit.net/spe1skb.css" />
         </Head>
         <main
            style={{ maxWidth: "500px", margin: "0 auto", paddingTop: "15px" }}
         >
            <Aside />
            <Tag title="JavaScript" icon={<SiJavascript />} />
            <PageHeader level={1}>Jordan Utz</PageHeader>
            <p style={{ marginBottom: 0 }}>
               I powered up my development journey by attending DevMountain, a
               three month immersive bootcamp that offers a full stack
               curriculum with an emphasis on React. This adventure has
               ultimately led me to join the digital team at Kroger, where I
               spend my day architecting performant component assets written in
               React and leveling up my JavaScript skills.
            </p>
         </main>
      </div>
   );
}
