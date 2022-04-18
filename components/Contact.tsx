import WithParallaxWrapper from "../hocs/WithParallaxWrapper";
import { InView } from "react-intersection-observer";

import { Anchor } from "./Anchor";
import { Button } from "./Button";
import { Card } from "./Card";
import { Cover } from "./Cover";
import { Footer } from "./Footer";
import { PageHeader } from "./PageHeader";

import { AiOutlineMail } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";

import useAppContext from "../context/useContext";

export const Contact = ({ offset, id }) => {
   const { setActiveCard, contentRefs } = useAppContext();

   return (
      <InView
         threshold={0.25}
         onChange={(inView) => inView && setActiveCard(offset)}
         ref={contentRefs[id]}
      >
         {({ inView, ref }) => {
            return (
               <Cover className="contact__cover">
                  <section className="contact" ref={ref} id={id}>
                     <Card
                        className="contact__card"
                        showArrow={false}
                     >
                        <div className="contact__icon">
                           <AiOutlineMail />
                        </div>
                                             <PageHeader className="contact__header" level={2}>Contact</PageHeader>
                        <div className="contact__overlay">
                           <p>
                              I&apos;m not seeking any opportunities at this
                              time, but feel free to take a copy of my{" "}
                              <Anchor
                                 href="/resume.pdf"
                                 className="contact__link"
                              >
                                 resume{" "}
                              </Anchor>{" "}
                              and please keep me in mind if you have any
                              opportunities for a{" "}
                              <span>Front End Software Engineer</span> open in
                              the future.
                           </p>
                           <Anchor href="mailto:jordanutz@outlook.com">
                              <Button type="primary" icon={<SiMinutemailer />}>
                                 Drop a Line
                              </Button>
                           </Anchor>
                        </div>
                     </Card>
                  </section>
                  <Footer />
               </Cover>
            );
         }}
      </InView>
   );
};

const WithContactWrapped = WithParallaxWrapper(Contact);

export default WithContactWrapped;
