import useAppContext from "../../context/useContext";
import { skills } from "./data";

import { Container } from "../Container";
import { Card } from "../Card";
import { Tag } from "../Tag";

export const Skills = () => {
   const { entries } = useAppContext();

   return (
      <Container id="skills" ref={entries.skills} offset={2}>
         <Card className="skills__card" title="Skills">
            <p className="skills__paragraph">
               My technical skillset is grounded in all areas existing within
               the domain of the browser. I take immense enjoyment in leveraging
               React to write lean, reusable components and scalable JavaScript
               code that serves the purpose of solving complex user stories,
               further fueled by a relentless commitment to deliver exceptional
               users interfaces that are semantically structured, translate
               seamlessly across multiple devices and browsers, and are
               accessible to all users.
            </p>
            <section className="skills__content">
               {skills.map((skills) => (
                  <Tag key={skills.id} {...skills} />
               ))}
            </section>
         </Card>
      </Container>
   );
};
