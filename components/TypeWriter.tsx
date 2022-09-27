import { FC, useState, useEffect, useReducer } from "react";
import { PageHeader } from "./";
import { initialState, reducer } from "../state";
import { TypewriterProps } from "../types";

export const Typewriter: FC<TypewriterProps> = ({ words, ...rest }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [blink, setBlink] = useState(false);

  const { typed, currentIndex, isDeleting, speed } = state;

  const currentWord = words[currentIndex];

  const calculateBlinkSpeed = () => {
    return speed === 3000 ? 400 : speed * 2;
  };

  useEffect(() => {
    const handleBlink = setTimeout(() => {
      setBlink((prevState) => !prevState);
    }, calculateBlinkSpeed());

    return () => clearTimeout(handleBlink);
  }, [blink, calculateBlinkSpeed]);

  useEffect(() => {
    if (currentWord === typed && !isDeleting) {
      dispatch({ type: "REMOVE_CHARACTER" });
      return;
    }

    if (!typed && isDeleting) {
      dispatch({ type: "SETUP" });

      if (currentIndex === words.length - 1) {
        dispatch({ type: "RESET_LIST" });
        return;
      }

      dispatch({ type: "NEXT_WORD" });
    }

    const setType = setTimeout(() => {
      dispatch({ type: "CONSTRUCT_WORD", payload: { currentWord } });
    }, speed);

    return () => clearTimeout(setType);
  }, [typed, isDeleting, currentIndex, speed, currentWord, words.length]);

  return (
    <section className="typewriter">
      <PageHeader {...rest}>
        {typed}
        {blink ? <span>|</span> : ""}
      </PageHeader>
    </section>
  );
};
