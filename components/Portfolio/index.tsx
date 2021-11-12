import Image from "next/image";
import WithParallaxWrapped from "../Container";

import { Card } from "../Card";
import { Anchor } from "../Anchor";
import { data } from "./data";

import { RiCodepenFill, RiGithubFill } from "react-icons/ri";

export const Portfolio = () => (
   <WithParallaxWrapped id="portfolio" offset={4}>
      <Card className="portfolio__card" title="Portfolio">
         <section className="portfolio__container">
            {data.map((project) => (
               <section className="portfolio__project" key={project.id}>
                  <div className="portfolio__overlay"></div>
                  <Image
                     className="portfolio__img"
                     src={project.image}
                     alt={project.title}
                     layout="fill"
                  />
                  <div className="portfolio__details">
                     <h3 className="portfolio__title">{project.title}</h3>
                     <p className="portfolio__description">
                        {project.description}
                     </p>
                     <section className="portfolio__social">
                        <Anchor
                           href={project.github}
                           label="View project on Github"
                        >
                           <RiGithubFill />
                        </Anchor>
                        <Anchor
                           href={project.codepen}
                           label="View project on Codepen"
                        >
                           <RiCodepenFill />
                        </Anchor>
                     </section>
                  </div>
               </section>
            ))}
         </section>
      </Card>
   </WithParallaxWrapped>
);
