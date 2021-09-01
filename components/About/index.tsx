import { Container } from "../Container";
import { Card } from "../Card";
import { Anchor } from "../Anchor";
import { MdVideogameAsset } from "react-icons/md";
import styles from "./About.module.css";

export const About = () => (
   <Container className={styles.about}>
      <Card
         className={styles.about__card}
         label={<MdVideogameAsset />}
         title="About"
      >
         <section className={styles.about__overlay}>
            <section className={styles.about__details}>
               <p>
                  Hey there! My name is Jordan and I powered up my development
                  journey by completing a full-stack web development course at
                  <Anchor href="https://devmountain.com/"> DevMountain</Anchor>.
                  This adventure has given me the rewarding opportunity to build
                  web applications for a marketing firm and architect JavaScript
                  powered user interfaces for an e-commerce platform.
               </p>{" "}
               <p>
                  These days, I have the privilege of contributing solutions as
                  a developer on the AMP Hydra team at{" "}
                  <Anchor href="https://kroger.com/"> Kroger</Anchor>, where I
                  spend my day building performant component assets in React
                  while leveling up my JavaScript skills.
               </p>
               <p>
                  Here are just a few interests of mine outside of programming:
               </p>
            </section>
            <section className={styles.about__interests}>
               <ul>
                  <li className={styles.about__interest}>Roller Coasters</li>
                  <li className={styles.about__interest}>Japanese Culture</li>
                  <li className={styles.about__interest}>Arcades</li>
                  <li className={styles.about__interest}>Photography</li>
               </ul>
               <ul>
                  <li className={styles.about__interest}>Horror Movies</li>
                  <li className={styles.about__interest}>Traveling</li>
                  <li className={styles.about__interest}>Swimming</li>
                  <li className={styles.about__interest}>Biking</li>
               </ul>
            </section>
         </section>
      </Card>
   </Container>
);
