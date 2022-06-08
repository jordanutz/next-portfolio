import WithParallaxWrapped from "./Container";

import { Anchor } from "./Anchor";
import { Button } from "./Button";
import { Card } from "./Card";
import { Cover } from "./Cover";
import { PageHeader } from "./PageHeader";

import { AiOutlineMail } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";
import ContactImg from "../public/contact.webp";

import useAppContext from "../context/useContext";

export const Contact = ({ offset, id }) => {
  const { setActiveCard, contentRefs } = useAppContext();

  return (
    <WithParallaxWrapped id="contact" offset={5}>
      <Card className="contact">
        <div className="contact__details">
          <div className="contact__icon">
            <AiOutlineMail />
          </div>
          <PageHeader className="contact__header" level={2}>
            Contact
          </PageHeader>
          <p>
            I&apos;m not seeking any opportunities at this time, but feel free
            to take a copy of my{" "}
            <Anchor href="/resume.pdf" className="contact__link">
              resume{" "}
            </Anchor>{" "}
            and please keep me in mind if you have any opportunities for a{" "}
            <span>Full Stack Software Engineer</span> open in the future.
          </p>
          <Anchor href="mailto:jordanutz@outlook.com">
            <Button type="primary" icon={<SiMinutemailer />}>
              Let&apos;s Connect!
            </Button>
          </Anchor>
        </div>
        <div className="contact__wrapper">
          <div
            className="contact__overlay"
            style={{ backgroundImage: `url(${ContactImg.src})` }}
          />
        </div>
      </Card>
    </WithParallaxWrapped>
  );
};

export default Contact;
