import { ButtonProps } from "./button";

export interface NavItemProps extends ButtonProps {
   title: string;
   inView?: boolean;
   ref: any;
}
