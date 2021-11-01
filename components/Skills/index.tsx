import { useContext } from "react";
import { AppContext } from "../../context";
import { Container } from "../Container";
import { Card } from "../Card";
import { Tag } from "../Tag";
import { skillsData } from "./data";
import styles from "./Skills.module.css";

export const Skills = () => {
   const context = useContext(AppContext);
   return (
      <Container id="skills" ref={context.entries.skills}>
         <Card className={styles.skills__card} title="Skills">
            <p className={styles.skills__paragraph}>
               My technical skillset is grounded in all areas existing within
               the domain of the browser. I take immense enjoyment in leveraging
               React to write lean, reusable components and scalable JavaScript
               code that serves the purpose of solving complex user stories,
               further fueled by a relentless commitment to deliver exceptional
               users interfaces that are semantically structured, translate
               seamlessly across multiple devices and browsers, and are
               accessible to all users.
            </p>
            <section className={styles.skills__content}>
               {skillsData.map((skills) => (
                  <Tag key={skills.id} {...skills} />
               ))}
            </section>
         </Card>
      </Container>
   );
};
