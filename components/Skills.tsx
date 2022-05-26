import { useState } from "react";
import WithParallaxWrapped from "./Container";

import { Card } from "./Card";
import { Tag } from "./Tag";
import { skills } from "../data/skills";
import { Carousel } from "./Carousel";

export const Skills = () => {
  const [active, setActive] = useState(0);
  const indicators = [
    { id: 0, label: "Front End Development", image: "" },
    { id: 1, label: "Back End Development", image: "" },
    { id: 2, label: "Workflow", image: "" },
  ];
  const modifiers = [
    "skills__container--front",
    "skills__container--back",
    "skills__container--workflow",
  ];

  return (
    <WithParallaxWrapped id="skills" offset={2}>
      <Card className="skills__card" title="Skills">
        {skills.map((skill) => {
          return (
            skill.id === active && (
              <>
                <h4>{skill.title}</h4>
                <div className={`skills__container ${modifiers[active]}`}>
                  <div className="skills__content">
                    {skill.icon}
                    <div className="skills__tags">
                      {skill.technologies.map((skills) => (
                        <Tag key={skills.id} {...skills} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <ul>
                      {skill.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )
          );
        })}
        <Carousel
          indicators={indicators}
          active={active}
          setActive={setActive}
        />
      </Card>
    </WithParallaxWrapped>
  );
};
