import React, { createContext, useRef } from "react";

export const AppContext = createContext({
   about: null,
});

export const AppProvider = ({ children }) => {
   const about = useRef();
   const skills = useRef();
   const experience = useRef();
   const portfolio = useRef();
   const contact = useRef();

   const handleSmoothScroll = (id) => {
      id.scrollIntoView({ block: "start", behavior: "smooth" });
   };

   return (
      <AppContext.Provider
         value={{
            about,
            skills,
            experience,
            portfolio,
            contact,
            handleSmoothScroll,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
