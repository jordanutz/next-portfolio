import { SiMinutemailer } from "react-icons/si";
import { Anchor, Button, PageHeader } from "./";

export const Contact = () => (
  <section className="contact">
    <div className="contact__container">
      <PageHeader level={2} className="contact__header">
        Contact
      </PageHeader>
      <p className="contact__text">
        I&apos;m not seeking any new roles at this time, but take a copy of my{" "}
        <Anchor href="/resume.pdf" className="contact__link">
          resume{" "}
        </Anchor>{" "}
        and keep me in mind if you have any opportunities for a{" "}
        <strong>Full Stack Engineer</strong> in the future.
      </p>
      <Anchor href="mailto:jordanutz@outlook.com">
        <Button
          className="contact__button"
          type="secondary"
          icon={<SiMinutemailer aria-hidden="true" />}
        >
          Let&apos;s Connect!
        </Button>
      </Anchor>
    </div>
  </section>
);
