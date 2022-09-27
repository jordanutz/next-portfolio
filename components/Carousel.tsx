import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { handleCarouselControls } from "../helpers/handleCarouselControls";
import { CarouselProps } from "../types";

export const Carousel = ({ indicators, active, setActive }: CarouselProps) => {
  const modifiers = {
    active: "carousel__image--active",
  };

  return (
    <section className="carousel">
      <button
        aria-label="previous"
        className="carousel__arrow"
        onClick={() =>
          handleCarouselControls("decrement", indicators, active, setActive)
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
              !image ? "carousel__button--simple" : ""
            } ${active === id ? modifiers.active : ""}`}
            key={id}
            style={{ backgroundImage: image ? `url(${image.src})` : null }}
          />
        ))}
      </div>
      <button
        aria-label="next"
        className="carousel__arrow"
        onClick={() =>
          handleCarouselControls("increment", indicators, active, setActive)
        }
      >
        <BsArrowRightShort className="carousel__icon" />
      </button>
    </section>
  );
};
