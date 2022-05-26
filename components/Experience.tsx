/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import WithParallaxWrapped from "./Container";

import { Carousel } from "./Carousel";
import { Card } from "./Card";
import { Tag } from "./Tag";
import { experienceData } from "../data/experience";

import { AiTwotoneCalendar } from "react-icons/ai";

import elink from "../assets/elink.webp";
import webstaurant from "../assets/webstaurant.webp";
import kroger from "../assets/kroger.webp";
import devmountain from "../assets/devmountain.webp";

export const Experience = () => {
  const indicators = [
    { id: 0, label: "Kroger", image: kroger },
    { id: 1, label: "WebstaurantStore", image: webstaurant },
    { id: 2, label: "eLink Design", image: elink },
    { id: 3, label: "DevMountain", image: devmountain },
  ];
  const [active, setActive] = useState(0);

  return (
    <WithParallaxWrapped id="experience" offset={3}>
      <Card title="Experience" className="card--bulleted">
        <div className="experience__grid">
          {experienceData.map(
            (experience, index) =>
              active === index && (
                <div className="experience__section" key={experience.id}>
                  <div className="experience__details">
                    <h4>
                      {`${experience.role} | `}
                      <span>{`${experience.company}`}</span>
                    </h4>
                    <Tag icon={<AiTwotoneCalendar />} title={experience.date} />
                  </div>
                  <ul className="experience__list">
                    {experience.responsibilities.map(
                      (responsibility, index) => (
                        <li className="experience__item" key={index}>
                          {responsibility}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )
          )}
          <Carousel
            indicators={indicators}
            active={active}
            setActive={setActive}
          />
        </div>
      </Card>
    </WithParallaxWrapped>
  );
};
