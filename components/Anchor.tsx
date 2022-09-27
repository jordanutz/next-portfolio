import { FC } from "react";
import { AnchorProps } from "../types";

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
