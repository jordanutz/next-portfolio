/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { AppContext } from "../../context";
import { PageHeader } from "../PageHeader";
import { FC } from "react";
import { CardProps } from "../../models/card";
import { useInView } from "react-intersection-observer";
import styles from "./Card.module.css";
import cn from "classnames";

export const Card: FC<CardProps> = ({
   className = "",
   children,
   image,
   showArrow = true,
   title,
}) => {
   const context = useContext(AppContext);
   const modifiers = {
      arrow: "card--arrow",
      animate: "card--animate-in",
   };

   const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5,
   });

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
      <section className={cardClass} ref={ref}>
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
