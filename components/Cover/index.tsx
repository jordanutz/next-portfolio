import React, { FC } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import styles from "./Cover.module.css";

interface CoverProps {
   className?: string;
   image: string;
}

export const Cover: FC<CoverProps> = ({ className, children, image }) => (
   <ParallaxLayer offset={0}>
      <section
         className={`${styles.cover} ${className ? className : ""}`}
         style={{ backgroundImage: `url(${image})` }}
      >
         {children}
      </section>
   </ParallaxLayer>
);
