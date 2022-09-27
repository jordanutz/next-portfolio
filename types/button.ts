import { ReactNode } from "react";

export interface ButtonProps {
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
  type?: string;
}
