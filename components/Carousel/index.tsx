import React from "react";
import { handleCarouselControls } from "./helpers";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

export const Carousel = ({ indicators, active, setActive }) => {
   const modifiers = {
      active: "carousel__image--active",
   };

   return (
      <section className="carousel">
         <button
            className="carousel__arrow"
            onClick={() =>
               handleCarouselControls(
                  "decrement",
                  indicators,
                  active,
                  setActive
               )
            }
         >
            <BsArrowLeftShort className="carousel__icon" />
         </button>
         <section className="carousel__widget">
            {indicators.map((image, index) => (
               <button
                  onClick={() => setActive(index)}
                  className={`carousel__button ${
                     active === index ? modifiers.active : ""
                  }`}
                  key={index}
                  style={{ backgroundImage: `url(${image.src})` }}
               />
            ))}
         </section>
         <button
            className="carousel__arrow"
            onClick={() =>
               handleCarouselControls(
                  "increment",
                  indicators,
                  active,
                  setActive
               )
            }
         >
            <BsArrowRightShort className="carousel__icon" />
         </button>
      </section>
   );
};
