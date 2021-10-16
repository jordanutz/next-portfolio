import React, { FC } from "react";
import styles from "./Cover.module.css";

interface CoverProps {
   className?: string;
   image: string;
}

export const Cover: FC<CoverProps> = ({ className, children, image }) => (
   <section
      className={`${styles.cover} ${className ? className : ""}`}
      style={{ backgroundImage: `url(${image})` }}
   >
      {children}
   </section>
);
