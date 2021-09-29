/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import styles from "./Carousel.module.css";

export const Carousel = ({ indicators, active, setActive }) => {
   const modifiers = {
      active: "carousel__image--active",
   };

   return (
      <section className={styles.carousel}>
         <button className={styles.carousel__arrow}>
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
         <button className={styles.carousel__arrow}>
            <BsArrowRightShort className={styles.carousel__icon} />
         </button>
      </section>
   );
};
