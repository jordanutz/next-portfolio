import { createContext, useRef } from "react";

export const AppContext = createContext({
  contentRefs: null,
  scrollIntoView: null,
});

export const AppProvider = ({ children }) => {
  const contentRefs = {
    about: useRef(),
  };

  const scrollIntoView = (key: string) => {
    const ref = contentRefs[key];

    ref.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <AppContext.Provider
      value={{
        contentRefs,
        scrollIntoView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
