import React, { useContext } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import { Cover } from "../Cover";
import { AppContext } from "../../context";
import { Card } from "../Card";
import { Button } from "../Button";
import { Anchor } from "../Anchor";
import styles from "./Contact.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";
import ContactImg from "../../assets/contact.jpg";

export const Contact = () => {
   const context = useContext(AppContext);
   return (
      <ParallaxLayer offset={5}>
         <InView
            threshold={0.25}
            onChange={(inView) => {
               inView && context.setActiveCard(context.entries.contact);
               context.setIsContactInView(inView);
            }}
         >
            {({ inView, ref }) => {
               return (
                  <Cover image={ContactImg.src}>
                     <section className={styles.contact} ref={ref} id="contact">
                        <section ref={context.entries.contact}>
                           <h2 className={styles.contact__header}>Contact</h2>
                           <Card
                              className={styles.contact__card}
                              showArrow={false}
                           >
                              <section className={styles.contact__icon}>
                                 <AiOutlineMail />
                              </section>
                              <section className={styles.contact__overlay}>
                                 <h4>
                                    Let&apos;s <span>Connect!</span>
                                 </h4>
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
