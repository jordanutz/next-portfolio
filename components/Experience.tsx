import { useState } from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import { Anchor, Carousel, Container, PageHeader, Tag } from "./";
import { kroger, webstaurant, elink, devmountain } from "../assets";
import { experience } from "../data/";

export const Experience = () => {
  const indicators = [
    { id: 0, label: "Kroger", image: kroger },
    { id: 1, label: "WebstaurantStore", image: webstaurant },
    { id: 2, label: "eLink Design", image: elink },
    { id: 3, label: "DevMountain", image: devmountain },
  ];
  const [active, setActive] = useState(0);

  return (
    <section className="experience">
      <Container
        element="div"
        isStretched={true}
        className="experience__container"
      >
        <PageHeader className="experience__title">Experience</PageHeader>
        <p className="experience__text">
          Since launching my journey three years ago, I&apos;ve had the
          opportunity to develop products for a marketing firm and architect
          applications for a restaurant supplier. These days, I contribute
          software solutions driving the user experience for customers as a
          Senior Software Engineer at{" "}
          <Anchor className="experience__link" href="https://kroger.com/">
            {" "}
            Kroger
          </Anchor>
          .
        </p>
      </Container>
      <div className="experience__content">
        {experience.map(
          (data, index) =>
            active === index && (
              <div className="experience__section" key={data.id}>
                <div className="experience__details">
                  <PageHeader level={3}>
                    {`${data.role} | `}
                    <span>{`${data.company}`}</span>
                  </PageHeader>
                  <Tag icon={<AiTwotoneCalendar />} title={data.date} />
                </div>
                <ul className="experience__list">
                  {data.responsibilities.map((responsibility, index) => (
                    <li className="experience__item" key={index}>
                      {responsibility}
                    </li>
                  ))}
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
    </section>
  );
};
