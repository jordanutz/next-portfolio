import React, { useRef } from "react";
import useAppContext from "../context/useContext";
import WithParallaxWrapper from "../hocs/WithParallaxWrapper";

import { InView } from "react-intersection-observer";

import { Anchor } from "./Anchor";
import { Button } from "./Button";
import { Cover } from "./Cover";
import { Social } from "./Social";
import { TypeWriter } from "./TypeWriter";

import { MdArrowDropDown } from "react-icons/md";
import { BsFillCursorFill } from "react-icons/bs";

import MainImg from "../public/main.webp";
import { Card } from "./Card";
import { PageHeader } from "./PageHeader";

const Title = ({ offset }) => {
   const titleRef = useRef();
   const { setActiveCard, contentRefs, scroll } =
      useAppContext();

   return (
      <InView
         threshold={0.5}
         onChange={(inView) => inView && setActiveCard(offset)}
         ref={contentRefs.title}
      >
         {({ inView, ref }) => {
            return (
               <Cover className="title">
                  <section className="title__overlay" ref={ref} />
                  <Card image={MainImg.src} showArrow={false} className="aside__card" />
                  <section className="title__content" ref={titleRef}>
                     <PageHeader className="title__header" level={1}>Jordan Utz</PageHeader>
                     <TypeWriter
                        words={[
                           "Front End Software Engineer.",
                           "Kentucky Wildcat.",
                           "Tech Minimalist."
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