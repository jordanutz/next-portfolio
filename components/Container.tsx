import { createElement, ReactNode, forwardRef } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
  element?: string;
  isStretched?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (props, ref) => {
    const {
      children,
      className = "",
      element = "section",
      isStretched = false,
    } = props;

    const isStretchedClass = isStretched ? "container--stretched" : "";

    return createElement(
      element,
      {
        className: `container ${className} ${isStretchedClass}`.trim(),
        ref,
      },
      children
    );
  }
);

Container.displayName = "Container";
