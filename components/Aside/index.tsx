import { Navigation } from "../Navigation";
import { Card } from "../Card";
import { SocialBar } from "../SocialBar";
import { Anchor } from "../Anchor";
import styles from "./Aside.module.css";

export const Aside = () => (
   <aside className={styles.aside}>
      <Navigation />
      <Card
         className={styles.aside__card}
         header="Jordan Utz"
         image="https://i.ibb.co/6BJWW7n/DSC3017.jpg"
      >
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
               Contact Me
            </Anchor>
         </section>
      </Card>
   </aside>
);
