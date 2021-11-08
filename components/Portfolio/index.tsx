/* eslint-disable @next/next/no-img-element */
import { Container } from "../Container";

import { Card } from "../Card";
import { Anchor } from "../Anchor";
import { data } from "./data";

import { RiCodepenFill, RiGithubFill } from "react-icons/ri";

export const Portfolio = () => (
   <Container id="portfolio" offset={4}>
      <Card className="portfolio__card" title="Portfolio">
         <section className="portfolio__container">
            {data.map((project) => (
               <section className="portfolio__project" key={project.id}>
                  <div className="portfolio__overlay"></div>
                  <img
                     className="portfolio__img"
                     src={project.image}
                     alt={project.title}
                  />
                  <div className="portfolio__details">
                     <h3 className="portfolio__title">{project.title}</h3>
                     <p className="portfolio__description">
                        {project.description}
                     </p>
                     <section className="portfolio__social">
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
