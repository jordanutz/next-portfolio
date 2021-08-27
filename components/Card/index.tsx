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
   const modifiers = {
      active: "card--active",
   };

   const cardClass = `${styles.card} ${
      !main ? styles[modifiers.active] : ""
   } ${className}`;

   const cardHeader = main && (
      <PageHeader level={main ? 2 : 3}>Jordan Utz</PageHeader>
   );
   const cardLabel = label && (
      <section className={styles.card__label}>{label}</section>
   );
   const cardImage = image && (
      <img src={image} className={styles.card__image} />
   );
   const cardTitle = title && <h3 className={styles.card__title}>{title}</h3>;

   return (
      <section className={cardClass}>
         {cardLabel}
         {cardImage}
         <section className={styles.card__container}>
            <section className={styles.card__header}>{cardHeader}</section>
            <section className={styles.card__content}>
               {cardTitle}
               {children}
            </section>
         </section>
      </section>
   );
};
