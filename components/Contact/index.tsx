import { Container } from "../Container";
import { Card } from "../Card";
import { Button } from "../Button";
import { Anchor } from "../Anchor";
import { SiMailDotRu } from "react-icons/si";
import styles from "./Contact.module.css";

export const Contact = () => {
   return (
      <Container className={styles.about}>
         <Card
            className={styles.contact__card}
            label={<SiMailDotRu />}
            title="Contact"
         >
            <section className={styles.contact__overlay}>
               <p>
                  If you have an employment opportunity in St. Petersburg,
                  Florida for a <span>Front End Software Engineer</span> and you
                  believe I would be a great fit for it, snag yourself a copy of
                  my{" "}
                  <Anchor
                     href="https://drive.google.com/file/d/1pSxbKb7ZTj7DvMCaFk0zTeeIQNkLgEkn/view?usp=sharing"
                     className="contact__link"
                  >
                     digital resume
                  </Anchor>{" "}
                  and don't hesitate to drop a line!
               </p>
               <Anchor href="mailto:jordanutz@outlook.com">
                  <Button type="secondary">Drop a Line</Button>
               </Anchor>
            </section>
         </Card>
      </Container>
   );
};
