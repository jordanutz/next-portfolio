/* eslint-disable @next/next/no-img-element */
import React, { useRef, useContext } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import { AppContext } from "../../context";
import { Anchor } from "../Anchor";
import { Button } from "../Button";
import { Cover } from "../Cover";
import { Navigation } from "../Navigation";
import { Social } from "../Social";
import { TypeWriter } from "../TypeWriter";
import { MdArrowDropDown } from "react-icons/md";
import { BsFillCursorFill } from "react-icons/bs";

import styles from "./Title.module.css";

export const Title = ({ offset }) => {
   const titleRef = useRef();
   const context = useContext(AppContext);
   return (
      <ParallaxLayer offset={0}>
         <InView
            threshold={0}
            onChange={(inView) => {
               inView && context.setActiveCard(null);
               context.setShowNav(!context.showNav);
            }}
         >
            {({ inView, ref }) => {
               return (
                  <Cover
                     className={styles.title}
                     image="https://i.ibb.co/NrcND69/DSC03981-3.jpg"
                  >
                     <section className={styles.title__overlay} ref={ref}>
                        <Navigation />
                        <img
                           src="https://i.ibb.co/6BJWW7n/DSC3017.jpg"
                           alt="Jordan Utz"
                        />
                     </section>
                     <section className={styles.title__content} ref={titleRef}>
                        <h1>Jordan Utz</h1>
                        <TypeWriter
                           words={[
                              "Front End Software Engineer.",
                              "Arcade Ninja.",
                              "Sun Chaser.",
                           ]}
                           level={2}
                        />
                        <p>
                           I’m a software engineer specializing in building (and
                           occasionally designing) exceptional digital
                           experiences. Currently, I’m focused on building
                           accessible, human-centered products at Kroger.
                        </p>
                        <Anchor href="https://drive.google.com/file/d/1kSfGKXYyAFxBkBOcTTrAB6phvBypGsSl/view?usp=sharing">
                           <Button type="primary" icon={<BsFillCursorFill />}>
                              Download My Resume
                           </Button>
                        </Anchor>
                     </section>
                     <MdArrowDropDown
                        aria-label="Scroll Down"
                        className={styles.title__chevron}
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000"
                        data-sal-delay="3000"
                        onClick={() =>
                           context.handleSmoothScroll(
                              context.entries.about.current
                           )
                        }
                     />
                     <section className={styles.title__social}>
                        <Social />
                     </section>
                  </Cover>
               );
            }}
         </InView>
      </ParallaxLayer>
   );
};
