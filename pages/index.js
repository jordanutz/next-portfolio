import Head from "next/head";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { isMobileOnly } from "react-device-detect";

import { About } from "../components/About";
import { Aside } from "../components/Aside";
import { Experience } from "../components/Experience";
import { NavContainer } from "../components/NavContainer";
import { Overlay } from "../components/Overlay";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

import WithContactWrapped from "../components/Contact";
import WithTitleWrapped from "../components/Title";

import useAppContext from "../context/useContext";

const Index = () => {
   const { isActivated, isDark, parallax, setClassName } = useAppContext();

   const pageContent = (
      <>
         <WithTitleWrapped offset={0} />
         <About />
         <Skills />
         <Experience />
         <Projects />
         <WithContactWrapped offset={5} id="contact" />
      </>
   );

   return (
      <div>
         <Head>
            <title>Jordan Utz | Front End Software Engineer</title>
            <meta
               name="description"
               content="Jordan Utz is a Front End Software Engineer based in St. Petersburg, FL with three years of professional development experience architecting scalable JavaScript applications."
            />
            <meta name="siteUrl" content="https://jordanutz.dev" />
         </Head>
         <main className={`content ${setClassName(isDark, "dark")}`}>
            {isMobileOnly ? (
               <>{pageContent}</>
            ) : (
               <Parallax pages={6} ref={parallax} enabled={!isActivated}>
                  <ParallaxLayer
                     className={`overlay ${setClassName(
                        isActivated,
                        "overlay--active"
                     )}`}
                     sticky={{ start: 0, end: 6 }}
                  >
                     <Overlay />
                  </ParallaxLayer>
                  <ParallaxLayer
                     className="parallax-layer__desktop"
                     sticky={{ start: 0, end: 5 }}
                  >
                     <NavContainer />
                  </ParallaxLayer>
                  <ParallaxLayer
                     className="parallax-layer__aside"
                     sticky={{ start: 0, end: 4 }}
                  >
                     <Aside />
                  </ParallaxLayer>
                  {pageContent}
               </Parallax>
            )}
         </main>
      </div>
   );
};
export default Index;
