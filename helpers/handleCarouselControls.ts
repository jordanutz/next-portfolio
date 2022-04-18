export const handleCarouselControls = (
   control,
   indicators,
   active,
   setActive,
) => {
   
   const total = indicators.length - 1;

   if (control == "increment") {
      if (active < total) {
         setActive(active + 1);
         return;
      }

      setActive(0);
      return;
   }

   if (control === "decrement") {
      if (active === 0) {
         setActive(total);
         return;
      }

      setActive(active - 1);
      return;
   }
};