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
            onClick={(event) =>
               handleCarouselControls(
                  "decrement",
                  indicators,
                  active,
                  setActive,
                  event
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
            onClick={(event) =>
               handleCarouselControls(
                  "increment",
                  indicators,
                  active,
                  setActive,
                  event
               )
            }
         >
            <BsArrowRightShort className="carousel__icon" />
         </button>
      </section>
   );
};
