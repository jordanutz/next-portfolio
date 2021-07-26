import { Container } from "../Container";
import { Card } from "../Card";
import { Anchor } from "../Anchor";
import styles from "./About.module.css";

export const About = () => (
   <Container className={styles.about}>
      <Card header="About" className={styles.about__card}>
         <section className={styles.about__label}>02.</section>
         <section className={styles.about__details}>
            <p>
               I powered up my development journey by attending
               <Anchor href="https://devmountain.com/"> DevMountain</Anchor>, an
               immersive three-month bootcamp that offers a full stack
               curriculum with an emphasis on React. This adventure has
               ultimately led me to join the digital team at{" "}
               <Anchor href="https://kroger.com/"> Kroger</Anchor>, where I
               spend my day architecting performant component assets written in
               React and leveling up my JavaScript skills.
            </p>
            <p>Here are just a few interests of mine outside of programming:</p>
         </section>
         <section className={styles.about__interests}>
            <ul>
               <li className={styles.about__interest}>Roller Coasters</li>
               <li className={styles.about__interest}>Japanese Culture</li>
               <li className={styles.about__interest}>Arcades</li>
               <li className={styles.about__interest}>Vaporwave</li>
            </ul>
            <ul>
               <li className={styles.about__interest}>Creative Writing</li>
               <li className={styles.about__interest}>Traveling</li>
               <li className={styles.about__interest}>Swimming</li>
               <li className={styles.about__interest}>Biking</li>
            </ul>
         </section>
      </Card>
   </Container>
);
