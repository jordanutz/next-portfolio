/* eslint-disable @next/next/no-img-element */
import { PageHeader } from "../PageHeader";
import { FC } from "react";
import { CardProps } from "../../models/card";

import styles from "./Card.module.css";

export const Card: FC<CardProps> = ({
   className = "",
   children,
   image,
   showArrow = true,
   title,
   inView,
}) => {
   const modifiers = {
      arrow: "card--arrow",
      animate: "card--animate-in",
   };

   const cardArrow = showArrow ? styles[modifiers.arrow] : "";
   const cardClass = `${styles.card} ${className} ${cardArrow}`;
   const cardImage = image && (
      <img src={image} className={styles.card__image} alt="" />
   );

   const cardTitle = title && (
      <PageHeader className={styles.card__title} level={3}>
         {title}
      </PageHeader>
   );

   const cardAnimation = inView ? styles[modifiers.animate] : "";

   return (
      <section className={`${cardClass} ${cardAnimation.trim()}`}>
         {cardImage}
         <section className={styles.card__container}>
            <section className={styles.card__content}>
               {cardTitle}
               {children}
            </section>
         </section>
      </section>
   );
};
