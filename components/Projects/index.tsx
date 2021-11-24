import Image from "next/image";
import WithParallaxWrapped from "../Container";

import { Card } from "../Card";
import { Anchor } from "../Anchor";
import { data } from "./data";

import { RiCodepenFill, RiGithubFill } from "react-icons/ri";

export const Projects = () => (
   <WithParallaxWrapped id="project" offset={4}>
      <Card className="project__card" title="Projects">
         <section className="project__container">
            {data.map((project) => (
               <section className="project__project" key={project.id}>
                  <div className="project__overlay"></div>
                  <Image
                     className="project__img"
                     src={project.image}
                     alt={project.title}
                     layout="fill"
                     // placeholder="blur"
                  />
                  <section className="project__details">
                     <h3 className="project__title">{project.title}</h3>
                     <p className="project__description">
                        {project.description}
                     </p>
                     <section className="project__social">
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
                  </section>
               </section>
            ))}
         </section>
      </Card>
   </WithParallaxWrapped>
);
