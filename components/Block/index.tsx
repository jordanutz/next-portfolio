import React, { FC } from "react";

interface BlockProps {
   className?: string;
}

export const Block: FC<BlockProps> = ({ children, className = "" }) => (
   <section className={`block ${className}`}>{children}</section>
);
