import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";
import { BsFillCursorFill } from "react-icons/bs";
import { Anchor, Button, Container, PageHeader, Social, Typewriter } from "./";

import MainImg from "../public/main.webp";
import useAppContext from "../context/useContext";

export const Title = () => {
  const { scrollIntoView } = useAppContext();

  return (
    <Container className="title">
      <div className="title__content">
        <Image
          src={MainImg}
          className="title__image"
          width={300}
          height={500}
          alt=""
          role="presentation"
        />
        <div className="title__body">
          <PageHeader className="title__header" level={1}>
            Jordan Utz
          </PageHeader>
          <Typewriter
            className="title__typewriter"
            words={[
              "Full Stack Software Engineer.",
              "Kentucky Wildcat.",
              "Tech Minimalist.",
            ]}
            level={2}
          />
          <p className="title__text">
            <strong>Full Stack Software Engineer</strong> with three years of
            professional development experience architecting (and occasionally
            designing) scalable JavaScript powered applications. Currently,
            I&apos;m committed to building accessible, user-focused experiences
            at Kroger as a Senior Software Engineer.
          </p>
          <Anchor href="/resume.pdf">
            <Button
              className="title__button"
              type="secondary"
              icon={<BsFillCursorFill />}
            >
              Download My Resume
            </Button>
          </Anchor>
        </div>
        <MdArrowDropDown
          aria-label="Scroll Down"
          className="title__chevron"
          data-sal="fade"
          data-sal-easing="ease-in"
          data-sal-duration="3000"
          data-sal-delay="3000"
          onClick={() => scrollIntoView("about")}
        />
        <div className="title__social">
          <Social />
        </div>
      </div>
    </Container>
  );
};
