import React, { useRef } from "react";
import useAppContext from "../../context/useContext";

import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";

import { Anchor } from "../Anchor";
import { Button } from "../Button";
import { Cover } from "../Cover";
import { Social } from "../Social";
import { TypeWriter } from "../TypeWriter";

import { MdArrowDropDown } from "react-icons/md";
import { BsFillCursorFill } from "react-icons/bs";

export const Title = ({ offset }) => {
   const titleRef = useRef();
   const { setActiveCard, scroll } = useAppContext();

   return (
      <ParallaxLayer offset={offset}>
         <InView
            threshold={0}
            onChange={(inView) => inView && setActiveCard(null)}
         >
            {({ inView, ref }) => {
               return (
                  <Cover
                     className="title"
                     image="https://i.ibb.co/NrcND69/DSC03981-3.jpg"
                  >
                     <section className="title__overlay" ref={ref}>
                        <img
                           src="https://i.ibb.co/6BJWW7n/DSC3017.jpg"
                           alt="Jordan Utz"
                        />
                     </section>
                     <section className="title__content" ref={titleRef}>
                        <h1>Jordan Utz</h1>
                        <TypeWriter
                           words={[
                              "Front End Software Engineer.",
                              "Kentucky Wildcat.",
                              "Always Elevating.",
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
                        className="title__chevron"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000"
                        data-sal-delay="3000"
                        onClick={() => scroll(1)}
                     />
                     <section className="title__social">
                        <Social />
                     </section>
                  </Cover>
               );
            }}
         </InView>
      </ParallaxLayer>
   );
};
