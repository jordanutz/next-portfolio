import { PageHeader } from "./";
import { skills } from "../data";

export const Skills = () => (
  <section className="skills">
    {skills.map((skill) => (
      <div className="skills__content" key={skill.id}>
        {skill.icon}
        <PageHeader level={3} className="skills__title">
          {skill.title}
        </PageHeader>
        <p className="skills__description">{skill.description}</p>
        <h4 className="skills__subheader">Tools</h4>
        <ul>
          {skill.technologies.map((skill, index) => (
            <li key={index} className="skills__list-item">
              {skill.title}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);
