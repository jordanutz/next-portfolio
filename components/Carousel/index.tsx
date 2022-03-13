import { handleCarouselControls } from "./helpers";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

export const Carousel = ({ indicators, active, setActive }) => {
   const modifiers = {
      active: "carousel__image--active",
   };

   return (
      <section className="carousel">
         <button
            aria-label="previous"
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
         <div className="carousel__widget">
            {indicators.map(({ id, label, image }) => (
               <button
                  aria-label={label}
                  onClick={() => setActive(id)}
                  className={`carousel__button ${
                     active === id ? modifiers.active : ""
                  }`}
                  key={id}
                  style={{ backgroundImage: `url(${image.src})` }}
               />
            ))}
         </div>
         <button
            aria-label="next"
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
