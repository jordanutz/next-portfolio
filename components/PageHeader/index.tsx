import { FC, createElement } from "react";
import { PageHeaderProps } from "../../models/pageheader";

export const PageHeader: FC<PageHeaderProps> = ({
   children,
   className = "",
   level = 2,
}) => {
   const modifiers = {
      1: "pageheader--1",
      2: "pageheader--2",
      3: "pageheader--3",
      4: "pageheader--4",
      5: "pageheader--5",
      6: "pageheader--6",
   };

   const renderTag = () => {
      return level === 1
         ? "h1"
         : level === 2
         ? "h2"
         : level === 3
         ? "h3"
         : level === 4
         ? "h4"
         : level === 5
         ? "h5"
         : level === 6
         ? "h6"
         : null;
   };
   return createElement(
      renderTag(),
      {
         className: `pageheader ${modifiers[level]} ${className}`,
      },
      children
   );
};
