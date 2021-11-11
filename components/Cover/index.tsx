import React, { FC } from "react";

interface CoverProps {
   className?: string;
   image: string;
}

export const Cover: FC<CoverProps> = ({ className = "", children, image }) => (
   <section
      className={`cover ${className}`}
      style={{ backgroundImage: `url(${image})` }}
   >
      {children}
   </section>
);
