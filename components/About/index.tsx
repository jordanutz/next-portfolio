import { Anchor } from "../Anchor";
import { Card } from "../Card";
import { Container } from "../Container";

export const About = () => (
   <Container id="about" offset={1}>
      <Card title="About" className="card--bulleted">
         <section className="about__details">
            <p>
               Heyooo! My name is Jordan and I powered up my development journey
               by completing a full-stack web development course at
               <Anchor href="https://devmountain.com/"> DevMountain</Anchor>.
               This adventure has given me the rewarding opportunity to build
               web applications for a marketing firm and architect JavaScript
               powered user interfaces for an e-commerce platform.
            </p>{" "}
            <p>
               These days, I have the privilege of contributing solutions as a
               developer on the AMP Hydra team at{" "}
               <Anchor href="https://kroger.com/"> Kroger</Anchor> - the largest
               grocery retailer in the country, where I spend my day building
               performant component assets in React while leveling up my
               JavaScript skills.
            </p>
            <p>Here are just a few interests of mine outside of programming:</p>
         </section>
         <section className="about__interests">
            <ul>
               <li className="about__interest">Roller Coasters</li>
               <li className="about__interest">Japanese Culture</li>
               <li className="about__interest">Arcades</li>
               <li className="about__interest">Photography</li>
            </ul>
            <ul>
               <li className="about__interest">Horror Movies</li>
               <li className="about__interest">Traveling</li>
               <li className="about__interest">Swimming</li>
               <li className="about__interest">Biking</li>
            </ul>
         </section>
      </Card>
   </Container>
);
