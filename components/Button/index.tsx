import { FC } from "react";
import { ButtonProps } from "../../models/button";

export const Button: FC<ButtonProps> = ({ children, icon, onClick, type }) => {
   const modifiers = {
      primary: "button--primary",
      secondary: "button--secondary",
      link: "button--link",
   };

   return (
      <button
         className={`button ${modifiers[type]}`}
         onClick={onClick}
         type="button"
      >
         {icon}
         {children}
      </button>
   );
};
