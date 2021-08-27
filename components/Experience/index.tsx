import { Container } from "../Container";
import { Card } from "../Card";
import styles from "./Experience.module.css";
import { IoIosRocket } from "react-icons/Io";

export const Experience = () => {
   return (
      <Container className={styles.experience}>
         <Card
            className={styles.experience__card}
            label={<IoIosRocket />}
            title="Experience"
         ></Card>
      </Container>
   );
};
