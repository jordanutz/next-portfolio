/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import useAppContext from "../../context/useContext";

import { Container } from "../Container";
import { Carousel } from "../Carousel";
import { Card } from "../Card";
import { Tag } from "../Tag";
import { experienceData } from "./data";

import { AiTwotoneCalendar } from "react-icons/ai";

import elink from "./assets/elink.jpg";
import webstaurant from "./assets/webstaurant.jpg";
import kroger from "./assets/kroger.jpg";
import devmountain from "./assets/devmountain.jpg";

export const Experience = () => {
   const { entries } = useAppContext();

   const indicators = [kroger, webstaurant, elink, devmountain];
   const [active, setActive] = useState(0);

   return (
      <Container ref={entries.experience} id="experience" offset={3}>
         <Card title="Experience">
            <section className="experience__grid">
               {experienceData.map(
                  (experience, index) =>
                     active === index && (
                        <section
                           className="experience__section"
                           key={experience.id}
                        >
                           <section className="experience__details">
                              <h4>
                                 {`${experience.role} | `}
                                 <span>{`${experience.company}`}</span>
                              </h4>
                              <Tag
                                 icon={<AiTwotoneCalendar />}
                                 title={experience.date}
                              />
                           </section>
                           <ul className="experience__list">
                              {experience.responsibilities.map(
                                 (responsibility, index) => (
                                    <li
                                       className="experience__item"
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
               <Carousel
                  indicators={indicators}
                  active={active}
                  setActive={setActive}
               />
            </section>
         </Card>
      </Container>
   );
};
