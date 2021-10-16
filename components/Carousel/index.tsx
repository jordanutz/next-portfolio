/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import styles from "./Carousel.module.css";

export const Carousel = ({ indicators, active, setActive }) => {
   const modifiers = {
      active: "carousel__image--active",
   };

   const handleCarouselControls = (control) => {
      const indicatorsTotal = indicators.length - 1;

      if (control == "increment") {
         if (active < indicatorsTotal) {
            setActive(active + 1);
            return;
         }

         setActive(0);
         return;
      }

      if (control === "decrement") {
         if (active === 0) {
            setActive(indicatorsTotal);
            return;
         }

         setActive(active - 1);
         return;
      }
   };

   return (
      <section className={styles.carousel}>
         <button
            className={styles.carousel__arrow}
            onClick={() => handleCarouselControls("decrement")}
         >
            <BsArrowLeftShort className={styles.carousel__icon} />
         </button>
         <section className={styles.carousel__widget}>
            {indicators.map((image, index) => (
               <button
                  onClick={() => setActive(index)}
                  className={`${styles.carousel__button} ${
                     active === index ? styles[modifiers.active] : ""
                  }`}
                  key={index}
                  style={{ backgroundImage: `url(${image.src})` }}
               />
            ))}
         </section>
         <button
            className={styles.carousel__arrow}
            onClick={() => handleCarouselControls("increment")}
         >
            <BsArrowRightShort className={styles.carousel__icon} />
         </button>
      </section>
   );
};
