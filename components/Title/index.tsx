import React, { useRef } from "react";
import Image from "next/image";
import useAppContext from "../../context/useContext";
import WithParallaxWrapper from "../../hocs/WithParallaxWrapper";

import { InView } from "react-intersection-observer";

import { Anchor } from "../Anchor";
import { Button } from "../Button";
import { Cover } from "../Cover";
import { Social } from "../Social";
import { TypeWriter } from "../TypeWriter";

import { MdArrowDropDown } from "react-icons/md";
import { BsFillCursorFill } from "react-icons/bs";

import ContactImg from "../../assets/contact.webp";

const Title = ({ offset }) => {
   const titleRef = useRef();
   const { setActiveCard, contentRefs, scroll, setIsTitleInView } =
      useAppContext();

   return (
      <InView
         threshold={0.5}
         onChange={(inView) => inView && setActiveCard(offset)}
         ref={contentRefs.title}
      >
         {({ inView, ref }) => {
            setIsTitleInView(inView);
            return (
               <Cover className="title" image={ContactImg.src}>
                  <section className="title__overlay" ref={ref} />
                  <section className="title__content" ref={titleRef}>
                     <h1>Jordan Utz</h1>
                     <TypeWriter
                        words={[
                           "Front End Software Engineer.",
                           "Kentucky Wildcat.",
                        ]}
                        level={2}
                     />
                     <p>
                        I&apos;m a <strong>Front End Software Engineer</strong>{" "}
                        based in St. Petersburg, Florida with three years of
                        professional development experience architecting (and
                        occasionally designing) scalable JavaScript powered
                        applications. Currently, I’m committed to building
                        accessible, user-focused experiences at Kroger.
                     </p>
                     <Anchor href="/resume.pdf">
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
                     onClick={() => scroll(1, "about")}
                  />
                  <section className="title__social">
                     <Social />
                  </section>
               </Cover>
            );
         }}
      </InView>
   );
};

const WithTitleWrapped = WithParallaxWrapper(Title);

export default WithTitleWrapped;
