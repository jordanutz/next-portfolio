import { PageHeader } from "../PageHeader";
import { FC } from "react";
import styles from "./Card.module.css";

interface CardProps {
   className?: string;
   header: string;
   image: string;
}

export const Card: FC<CardProps> = ({ header, className, children, image }) => (
   <section className={`${styles.card} ${className}`}>
      <img src={image} alt={header} className={styles.card__image} />
      <section className={styles.card__container}>
         <section className={styles.card__header}>
            <PageHeader>{header}</PageHeader>
         </section>
         <section className={styles.card__content}>{children}</section>
      </section>
   </section>
);
