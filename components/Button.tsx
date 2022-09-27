import { FC } from "react";
import { ButtonProps } from "../types";

export const Button: FC<ButtonProps> = ({
  children,
  className,
  icon,
  type,
  ...rest
}) => {
  const modifiers = {
    primary: "button--primary",
    secondary: "button--secondary",
    link: "button--link",
  };

  return (
    <button
      className={`button ${className} ${type ? modifiers[type] : ""}`}
      type="button"
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
};
