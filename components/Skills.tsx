import WithParallaxWrapped from "./Container";

import { Card } from "./Card";
import { Tag } from "./Tag";
import { skills } from "../data/skills";

export const Skills = () => (
   <WithParallaxWrapped id="skills" offset={2}>
      <Card className="skills__card" title="Skills">
         <p className="skills__paragraph">
            My technical skillset is grounded in all areas existing within the
            domain of the browser. I take enjoyment in leveraging React
            to write lean, reusable components and scalable JavaScript code that
            serves the purpose of solving complex user stories while delivering exceptional users interfaces
            that are semantically structured, translate seamlessly across
            multiple devices and browsers, and are accessible to all users.
         </p>
         <div className="skills__content">
            {skills.map((skills) => (
               <Tag key={skills.id} {...skills} />
            ))}
         </div>
      </Card>
   </WithParallaxWrapped>
);
