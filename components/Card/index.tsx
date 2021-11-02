import React, { FC } from "react";
import { useInView } from "react-intersection-observer";
import { PageHeader } from "../PageHeader";
import { CardProps } from "../../models/card";

export const Card: FC<CardProps> = ({
   className = "",
   children,
   image,
   showArrow = true,
   title,
}) => {
   const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5,
   });

   const modifiers = {
      arrow: "card--arrow",
      animate: "card--animate-in",
   };

   const cardArrow = showArrow ? modifiers.arrow : "";
   const cardAnimation = inView ? modifiers.animate : "";
   const cardClass = `card ${className} ${cardArrow}`;
   const cardImage = image && (
      <img src={image} className="card__image" alt="" role="presentation" />
   );
   const cardTitle = title && (
      <PageHeader className="card__title" level={3}>
         {title}
      </PageHeader>
   );

   return (
      <section
         className={`${cardClass} ${className} ${cardAnimation}`}
         ref={ref}
      >
         {cardImage}
         <section className="card__container">
            <section className="card__content">
               {cardTitle}
               {children}
            </section>
         </section>
      </section>
   );
};
