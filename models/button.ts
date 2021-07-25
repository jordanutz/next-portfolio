import { ReactNode } from "react";

export interface ButtonProps {
   icon?: ReactNode;
   onClick?: () => void;
   type?: string;
}
