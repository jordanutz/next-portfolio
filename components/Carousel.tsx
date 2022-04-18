import { handleCarouselControls } from "../helpers/handleCarouselControls";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { CarouselProps } from "../types/carousel";

export const Carousel = ({ indicators, active, setActive }: CarouselProps) => {
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
                  setActive
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
               )
            }
         >
            <BsArrowRightShort className="carousel__icon" />
         </button>
      </section>
   );
};
