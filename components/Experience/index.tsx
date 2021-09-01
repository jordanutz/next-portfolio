import React, { useState } from "react";
import { Container } from "../Container";
import { Card } from "../Card";
import { Tag } from "../Tag";
import styles from "./Experience.module.css";
import { IoIosRocket } from "react-icons/Io";
import { experienceData } from "./data";
import { AiTwotoneCalendar } from "react-icons/ai";

import elink from "./assets/elink.jpg";
import webstaurant from "./assets/webstaurant.jpg";
import kroger from "./assets/kroger.jpg";

export const Experience = () => {
   const [active, setActive] = useState(1);
   const images = [kroger, webstaurant, elink];

   const modifiers = {
      active: "experience__image--active",
   };

   return (
      <Container>
         <Card
            className={styles.experience__card}
            label={<IoIosRocket />}
            title="Experience"
         >
            <section className={styles.experience__grid}>
               {experienceData.map(
                  (experience, index) =>
                     active === index && (
                        <section
                           className={styles.experience__section}
                           key={experience.id}
                        >
                           <section className={styles.experience__details}>
                              <h4>
                                 {`${experience.role} | `}
                                 <span>{`${experience.company}`}</span>
                              </h4>
                              <Tag
                                 icon={<AiTwotoneCalendar />}
                                 title={experience.date}
                              />
                           </section>
                           <ul className={styles.experience__responsibilities}>
                              {experience.responsibilities.map(
                                 (responsibility, index) => (
                                    <li
                                       className={
                                          styles.experience__responsibility
                                       }
                                       key={index}
                                    >
                                       {responsibility}
                                    </li>
                                 )
                              )}
                           </ul>
                        </section>
                     )
               )}
               <section className={styles.experience__menu}>
                  <section className={styles.experience__widget}>
                     {images.map((image, index) => (
                        <section
                           onClick={() => setActive(index)}
                           className={`${styles.experience__imgwrapper} ${
                              active === index ? styles[modifiers.active] : ""
                           }`}
                        >
                           <img
                              src={image.src}
                              alt="eLink Design"
                              className={styles.experience__image}
                           />
                        </section>
                     ))}
                  </section>
               </section>
            </section>
         </Card>
      </Container>
   );
};
