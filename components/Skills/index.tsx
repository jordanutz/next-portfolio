import { Container } from "../Container";
import { Card } from "../Card";
import { Tag } from "../Tag";

import { skillsData } from "./data";
import styles from "./Skills.module.css";
import { MdLaptopMac } from "react-icons/md";

export const Skills = () => (
   <Container className={styles.skills}>
      <Card
         className={styles.skills__card}
         label={<MdLaptopMac />}
         title="Skills"
      >
         <p style={{ marginBottom: "24px", marginTop: "40px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
            dui nec metus euismod hendrerit. Duis eros nisi, rutrum non ante
            nec, varius ultricies lectus. Nullam blandit scelerisque turpis sed
            tempor. Proin luctus porta nisl, id mollis nunc lacinia varius. Nunc
            euismod tortor in viverra auctor. Maecenas euismod ac ipsum eu
            sagittis.
         </p>
         <section className={styles.skills__content}>
            {skillsData.map((skills) => (
               <Tag key={skills.id} {...skills} />
            ))}
         </section>
      </Card>
   </Container>
);
