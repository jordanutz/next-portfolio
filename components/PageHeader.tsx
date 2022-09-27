import { FC, createElement } from "react";
import { PageHeaderProps } from "../types";

export const PageHeader: FC<PageHeaderProps> = ({
  children,
  className = "",
  level = 2,
}) => {
  const tag = `h${level}`;

  return createElement(
    tag,
    {
      className: `pageheader pageheader--${level} ${className}`,
    },
    children
  );
};
