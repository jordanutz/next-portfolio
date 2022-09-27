import Image from "next/image";
import { BsFillCursorFill } from "react-icons/bs";
import { RiGithubFill } from "react-icons/ri";
import { Anchor, Button, Container, PageHeader } from "./";
import { projects } from "../data";

export const Projects = () => (
  <Container className="projects">
    <PageHeader className="projects__title">My Projects</PageHeader>
    <p>Here are snapshots of my latest work that I am proud of! </p>
    <div className="projects__content">
      {projects.map((project) => (
        <figure className="projects__figure" key={project.id}>
          <div className="projects__overlay"></div>
          <Image
            className="projects__img"
            src={project.image}
            alt={project.title}
            layout="fill"
          />
          <figcaption className="projects__figcaption">
            <PageHeader level={3}>{project.title}</PageHeader>
            <p className="projects__description">{project.description}</p>
            <div className="projects__social">
              <Anchor href={project.github} label="View project on Github">
                <RiGithubFill />
              </Anchor>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
    <Anchor href="https://www.github.com/jordanutz" className="projects__link">
      <Button
        className="projects__button"
        type="secondary"
        icon={<BsFillCursorFill />}
      >
        View My GitHub
      </Button>
    </Anchor>
  </Container>
);
