import { Navigation } from "../Navigation";
import { Card } from "../Card";
import { SocialBar } from "../SocialBar";
import { PageHeader } from "../PageHeader";
import { Anchor } from "../Anchor";
import styles from "./Aside.module.css";
import Particles from "react-tsparticles";

export const Aside = () => (
   <aside className={styles.aside}>
      {/* <Particles
         id="tsparticles"
         options={{
            background: {
               color: {
                  value: "#e9e9e9",
               },
            },
            fpsLimit: 60,
            interactivity: {
               detectsOn: "canvas",
               events: {
                  resize: true,
               },
               modes: {
                  bubble: {
                     distance: 0,
                     duration: 100,
                     opacity: 0.8,
                     size: 100,
                  },
                  push: {
                     quantity: 150,
                  },
                  repulse: {
                     distance: 100,
                     duration: 100,
                  },
               },
            },
            particles: {
               color: {
                  value: "#006dcc",
               },
               links: {
                  color: "#5cb3ff",
                  distance: 75,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
               },
               collisions: {
                  enable: true,
               },
               move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 1.5,
                  straight: false,
               },
               number: {
                  density: {
                     enable: true,
                     value_area: 800,
                  },
                  value: 150,
               },
               opacity: {
                  value: 0.9,
               },
               shape: {
                  type: "circle",
               },
               size: {
                  random: true,
                  value: 5,
               },
            },
            detectRetina: true,
         }}
      /> */}
      <Navigation />
      <Card
         className={styles.aside__card}
         image="https://i.ibb.co/6BJWW7n/DSC3017.jpg"
         main={true}
      >
         <section className={styles.aside__subheader}>
            <PageHeader level={2}>Jordan Utz</PageHeader>
            <PageHeader level={6}>Front End Software Engineer</PageHeader>
         </section>
         <SocialBar />
         <section className={styles.aside__quicklinks}>
            <Anchor
               className={styles.aside__anchor}
               href="https://drive.google.com/file/d/1pSxbKb7ZTj7DvMCaFk0zTeeIQNkLgEkn/view"
            >
               Resume
            </Anchor>
            <Anchor
               className={styles.aside__anchor}
               href="mailto:jordanutz@outlook.com"
            >
               Say Hello!
            </Anchor>
         </section>
      </Card>
   </aside>
);
