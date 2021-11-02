/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useEffect } from "react";
import { PageHeader } from "../PageHeader";
import { TypeWriterProps } from "../../models/typewriter";

export const TypeWriter: FC<TypeWriterProps> = ({ words, ...rest }) => {
   const [typed, setTyped] = useState("");
   const [currentIndex, setCurrentIndex] = useState(0);
   const [isDeleting, setIsDeleting] = useState(false);
   const [speed, setSpeed] = useState(100);
   const [blink, setBlink] = useState(false);
   const currentWord = words[currentIndex];

   const calculateBlinkSpeed = () => {
      return speed === 3000 ? 400 : speed * 2;
   };

   useEffect(() => {
      const handleBlink = setTimeout(() => {
         setBlink((prevState) => !prevState);
      }, calculateBlinkSpeed());

      return () => clearTimeout(handleBlink);
   }, [blink]);

   useEffect(() => {
      /* Executes when the current word is finished typing out. 
      At this point, we need to begin removing each character.  */
      if (currentWord === typed && !isDeleting) {
         setIsDeleting(true);
         setSpeed(3000);
         return;
      }

      /* Executes only when each character has been removed and we're ready to shift to the next word. */
      if (!typed && isDeleting) {
         setIsDeleting(false);
         setSpeed(600);

         /* Tests whether or not our current word is the last word in our array of words. 
         If so, reset to initial. Otherwise, increment the currentIndex. */
         if (currentIndex === words.length - 1) {
            setCurrentIndex(0);
            return;
         }

         setCurrentIndex((prevState) => prevState + 1);
      }

      const setType = setTimeout(() => {
         if (isDeleting) {
            setSpeed(75);
            setTyped(currentWord.substring(0, typed.length - 1));
         } else {
            setSpeed(125);
            setTyped(currentWord.substring(0, typed.length + 1));
         }
      }, speed);

      return () => clearTimeout(setType);
   }, [typed.length, isDeleting, currentIndex]);

   return (
      <section className="typewriter">
         <PageHeader {...rest}>
            {typed}
            {blink ? <span>|</span> : ""}
         </PageHeader>
      </section>
   );
};
