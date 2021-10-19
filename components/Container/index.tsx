import { FC, forwardRef, ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
   className?: string;
   ref?: any;
}

export const Container: FC<ContainerProps> = forwardRef<
   HTMLElement,
   ContainerProps
>(({ children }, ref) => (
   <section className={styles.container} ref={ref}>
      <section className={styles.container__step}></section>
      {children}
   </section>
));

Container.displayName = "Container";
