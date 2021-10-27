/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { AppContext } from "../../context";
import { Container } from "../Container";
import { Card } from "../Card";
import { Anchor } from "../Anchor";
import { data } from "./data";
import { RiCodepenFill, RiGithubFill } from "react-icons/ri";

import styles from "./Portfolio.module.css";

export const Portfolio = () => {
   const context = useContext(AppContext);
   return (
      <Container ref={context.entries.portfolio} id="portfolio">
         <Card className={styles.portfolio__card} title="Portfolio">
            <section className={styles.portfolio__container}>
               {data.map((project) => (
                  <section
                     className={styles.portfolio__project}
                     key={project.id}
                  >
                     <div className={styles.portfolio__overlay}></div>
                     <img
                        className={styles.portfolio__img}
                        src={project.image}
                        alt={project.title}
                     />
                     <div className={styles.portfolio__details}>
                        <h3 className={styles.portfolio__title}>
                           {project.title}
                        </h3>
                        <p className={styles.portfolio__description}>
                           {project.description}
                        </p>
                        <section className={styles.portfolio__social}>
                           <Anchor href={project.github}>
                              <RiGithubFill />
                           </Anchor>
                           <Anchor href={project.codepen}>
                              <RiCodepenFill />
                           </Anchor>
                        </section>
                     </div>
                  </section>
               ))}
            </section>
         </Card>
      </Container>
   );
};
