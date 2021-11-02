import { FC } from "react";

interface AnchorProps {
   className?: string;
   href: string;
}

export const Anchor: FC<AnchorProps> = ({ children, className = "", href }) => (
   <a
      className={`anchor ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
   >
      {children}
   </a>
);
