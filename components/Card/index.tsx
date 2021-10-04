import { PageHeader } from "../PageHeader";
import { FC } from "react";
import styles from "./Card.module.css";

interface CardProps {
   className?: string;
   image?: string;
   label?: any;
   main?: boolean;
   title?: string;
}

export const Card: FC<CardProps> = ({
   className = "",
   children,
   image,
   label,
   main = false,
   title,
}) => {
   const cardClass = `${styles.card} ${!main ? "" : ""} ${className}`;
   const cardImage = image && (
      <img src={image} className={styles.card__image} />
   );
   const cardTitle = title && <h3 className={styles.card__title}>{title}</h3>;

   const bodyClass = !main ? styles.card__body : "";

   return (
      <section className={cardClass}>
         {cardImage}
         <section className={styles.card__container}>
            <section className={styles.card__content}>
               {cardTitle}
               <section>{children}</section>
            </section>
         </section>
      </section>
   );
};
