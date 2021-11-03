import useAppContext from "../../context/useContext";

import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";

import { Anchor } from "../Anchor";
import { Button } from "../Button";
import { Card } from "../Card";
import { Cover } from "../Cover";

import { AiOutlineMail } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";

import ContactImg from "../../assets/contact.jpg";

export const Contact = () => {
   const { entries, setActiveCard } = useAppContext();

   return (
      <ParallaxLayer offset={5}>
         <InView
            threshold={0.25}
            onChange={(inView) => inView && setActiveCard(5)}
         >
            {({ inView, ref }) => {
               return (
                  <Cover image={ContactImg.src}>
                     <section className="contact" ref={ref} id="contact">
                        <section ref={entries.contact}>
                           <h2 className="contact__header">Contact</h2>
                           <Card className="contact__card" showArrow={false}>
                              <section className="contact__icon">
                                 <AiOutlineMail />
                              </section>
                              <section className="contact__overlay">
                                 <h3>Let's Connect!</h3>
                                 <p>
                                    If you have an employment opportunity in St.
                                    Petersburg, Florida for a{" "}
                                    <span>Front End Software Engineer</span> and
                                    you believe I would be a great fit for it,
                                    snag yourself a copy of my{" "}
                                    <Anchor
                                       href="https://drive.google.com/file/d/1kSfGKXYyAFxBkBOcTTrAB6phvBypGsSl/view?usp=sharing"
                                       className="contact__link"
                                    >
                                       digital resume{" "}
                                    </Anchor>
                                    and don&apos;t hesitate to drop a line!
                                 </p>
                                 <Anchor href="mailto:jordanutz@outlook.com">
                                    <Button
                                       type="primary"
                                       icon={<SiMinutemailer />}
                                    >
                                       Drop a Line
                                    </Button>
                                 </Anchor>
                              </section>
                           </Card>
                        </section>
                     </section>
                  </Cover>
               );
            }}
         </InView>
      </ParallaxLayer>
   );
};
