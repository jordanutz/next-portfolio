import { Navigation } from "../Navigation";
import { Card } from "../Card";
import { Social } from "../Social";
import { PageHeader } from "../PageHeader";
import { Anchor } from "../Anchor";
import styles from "./Aside.module.css";

export const Aside = () => (
   <aside className={styles.aside}>
      <Navigation />
      <Card
         className={styles.aside__card}
         image="https://i.ibb.co/6BJWW7n/DSC3017.jpg"
      >
         <section className={styles.aside__subheader}>
            <PageHeader level={2}>Jordan Utz</PageHeader>
            <PageHeader level={6}>Front End Software Engineer</PageHeader>
         </section>
         <Social />
         <section className={styles.aside__quicklinks}>
            <Anchor
               className={styles.aside__anchor}
               href="https://drive.google.com/file/d/1kSfGKXYyAFxBkBOcTTrAB6phvBypGsSl/view?usp=sharing"
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
