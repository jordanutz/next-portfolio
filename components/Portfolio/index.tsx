import React from "react";
import { Container } from "../Container";
import { Card } from "../Card";
import styles from "./Portfolio.module.css";
import { data } from "./data";
import { HiCode } from "react-icons/hi";

console.log(styles);

export const Portfolio = () => {
   return (
      <Container className={styles.portfolio}>
         <Card
            className={styles.portfolio__card}
            label={<HiCode />}
            title="Portfolio"
         >
            <section className={styles.portfolio__grid}>
               {data.map((project) => {
                  return (
                     <img
                        className={styles.portfolio__image}
                        src={project.image}
                        alt={project.title}
                     />
                  );
               })}
            </section>
         </Card>
      </Container>
   );
};
