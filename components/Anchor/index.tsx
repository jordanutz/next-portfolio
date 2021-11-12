import { FC } from "react";

interface AnchorProps {
   className?: string;
   href: string;
   label?: string;
}

export const Anchor: FC<AnchorProps> = ({
   children,
   className = "",
   href,
   label = "",
}) => (
   <a
      aria-label={label}
      className={`anchor ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
   >
      {children}
   </a>
);
