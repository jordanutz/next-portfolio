import { FC } from "react";
import styles from "./Anchor.module.css";

interface AnchorProps {
   className?: string;
   href: string;
}

export const Anchor: FC<AnchorProps> = ({ children, className, href }) => (
   <a
      className={`${styles.anchor} ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
   >
      {children}
   </a>
);
