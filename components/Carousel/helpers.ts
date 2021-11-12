export const handleCarouselControls = (
   control,
   indicators,
   active,
   setActive,
   event
) => {
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
