import React, { FC } from "react";
import { BlockProps } from "../types/block";

export const Block: FC<BlockProps> = ({
   children,
   className = "",
   ...rest
}) => (
   <section className={`block ${className}`} {...rest}>
      {children}
   </section>
);
