import { Card } from "../Card";
import { Button } from "../Button";
import { Anchor } from "../Anchor";
import styles from "./Contact.module.css";
import { AiOutlineMail } from "react-icons/ai";

export const Contact = () => {
   return (
      <section className={styles.contact}>
         <h2 className={styles.contact__header}>Contact</h2>
         <Card className={styles.contact__card} showArrow={false}>
            <section className={styles.contact__icon}>
               <AiOutlineMail />
            </section>
            <section className={styles.contact__overlay}>
               <h4>
                  Let&apos;s <span>Collaborate!</span>
               </h4>

               <p>
                  If you have an employment opportunity in St. Petersburg,
                  Florida for a <span>Front End Software Engineer</span> and you
                  believe I would be a great fit for it, snag yourself a copy of
                  my{" "}
                  <Anchor
                     href="https://drive.google.com/file/d/1pSxbKb7ZTj7DvMCaFk0zTeeIQNkLgEkn/view?usp=sharing"
                     className="contact__link"
                  >
                     digital resume{" "}
                  </Anchor>
                  and don&apos;t hesitate to drop a line!
               </p>
               <Anchor href="mailto:jordanutz@outlook.com">
                  <Button type="primary" icon={<AiOutlineMail />}>
                     Drop a Line
                  </Button>
               </Anchor>
            </section>
         </Card>
      </section>
   );
};
