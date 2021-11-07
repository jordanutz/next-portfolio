import { FC } from "react";
import { ButtonProps } from "../../models/button";

export const Button: FC<ButtonProps> = ({ children, icon, type, ...rest }) => {
   const modifiers = {
      primary: "button--primary",
      secondary: "button--secondary",
      link: "button--link",
   };

   return (
      <button
         className={`button ${type ? modifiers[type] : ""}`}
         type="button"
         {...rest}
      >
         {icon}
         {children}
      </button>
   );
};
