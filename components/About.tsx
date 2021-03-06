import WithParallaxWrapped from "./Container";

import { Anchor } from "./Anchor";
import { Card } from "./Card";

export const About = () => (
  <WithParallaxWrapped id="about" offset={1}>
    <Card title="About" className="card--bulleted">
      <div className="about__details">
        <p>
          My name is Jordan and I powered up my development journey by
          completing a full-stack web development course at
          <Anchor href="https://devmountain.com/"> DevMountain</Anchor>. This
          adventure has given me the rewarding opportunity to build web
          applications for a marketing firm and architect JavaScript powered
          user interfaces for an e-commerce platform.
        </p>{" "}
        <p>
          These days, I have the privilege of contributing software solutions as
          an engineer on the AMP Hydra team at{" "}
          <Anchor href="https://kroger.com/"> Kroger</Anchor>, where I spend my
          day building performant component assets in React while leveling up my
          JavaScript skills.
        </p>
        <p>Here are just a few interests of mine outside of programming:</p>
      </div>
      <div className="about__interests">
        <ul>
          <li className="about__interest">Roller Coasters</li>
          <li className="about__interest">Japanese Culture</li>
          <li className="about__interest">Arcades</li>
          <li className="about__interest">Photography</li>
        </ul>
        <ul>
          <li className="about__interest">Horror Movies</li>
          <li className="about__interest">Paddleboarding</li>
          <li className="about__interest">Swimming</li>
          <li className="about__interest">Biking</li>
        </ul>
      </div>
    </Card>
  </WithParallaxWrapped>
);
