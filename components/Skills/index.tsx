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
      <Container className={styles.skills} ref={context.skills}>
         <Card className={styles.skills__card} title="Skills">
            <p className={styles.skills__paragraph}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
               eu dui nec metus euismod hendrerit. Duis eros nisi, rutrum non
               ante nec, varius ultricies lectus. Nullam blandit scelerisque
               turpis sed tempor. Proin luctus porta nisl, id mollis nunc
               lacinia varius. Nunc euismod tortor in viverra auctor. Maecenas
               euismod ac ipsum eu sagittis.
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
