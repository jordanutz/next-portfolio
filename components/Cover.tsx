import React, { FC } from "react";
import { CoverProps } from "../types/cover";

export const Cover: FC<CoverProps> = ({ className = "", children, image }) => (
   <section
      className={`cover ${className}`}
      style={{ backgroundImage: image ? `url(${image})` : null}}
   >
      {children}
   </section>
);
