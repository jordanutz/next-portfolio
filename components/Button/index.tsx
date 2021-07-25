import { FC } from "react";
import { ButtonProps } from "../../models/button";
import styles from "./Button.module.css";

export const Button: FC<ButtonProps> = ({ children, icon, onClick, type }) => {
   const modifiers = {
      primary: "button--primary",
      secondary: "button--secondary",
      link: "button--link",
   };

   return (
      <button
         className={`${styles.button} ${styles[modifiers[type]]}`}
         onClick={onClick}
         type="button"
      >
         {icon}
         {children}
      </button>
   );
};
