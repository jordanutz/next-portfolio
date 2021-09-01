import React from "react";
import { Container } from "../Container";
import { Card } from "../Card";
import styles from "./Portfolio.module.css";
import { data } from "./data";
import { HiCode } from "react-icons/hi";

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
                     <section className={styles.portfolio__image}>
                        {/* <section className={styles.portfolio__overlay}>
                           <section className={styles.portfolio__title}>
                              <h5>{project.title}</h5>
                           </section>
                        </section> */}
                        <img
                           className={styles.portfolio__image}
                           src={project.image}
                           alt={project.title}
                        />
                     </section>
                  );
               })}
            </section>
         </Card>
      </Container>
   );
};
