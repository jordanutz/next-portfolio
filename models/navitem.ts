import { ButtonProps } from "./button";

export interface NavItemProps extends ButtonProps {
   card: number;
   inView?: boolean;
   title: string;
}
