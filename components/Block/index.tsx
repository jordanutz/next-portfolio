import React, { FC } from "react";

interface BlockProps {
   className?: string;
   onClick?: () => void;
}

export const Block: FC<BlockProps> = ({
   children,
   className = "",
   ...rest
}) => (
   <section className={`block ${className}`} {...rest}>
      {children}
   </section>
);
