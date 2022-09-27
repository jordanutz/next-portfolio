import { Anchor, Container, PageHeader } from "./";
import useAppContext from "../context/useContext";

export const About = () => {
  const {
    contentRefs: { about },
  } = useAppContext();

  return (
    <Container isStretched ref={about} className="about">
      <PageHeader className="about__title">Hey there, friend. 👋🏼</PageHeader>
      <p className="about__text">
        My name is Jordan and I specialize in creating rich digital experiences
        from a blank canvas. I powered on my development journey by completing a
        full stack web development course at
        <Anchor className="about__link" href="https://devmountain.com/">
          {" "}
          DevMountain
        </Anchor>
        . I&apos;m natually invested in the types of problems I encounter daily
        and the experience points each one provides.
      </p>
    </Container>
  );
};
