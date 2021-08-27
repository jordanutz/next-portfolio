import { FC } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
   className?: string;
}

export const Container: FC<ContainerProps> = ({ children }) => (
   <section className={styles.container}>
      <section className={styles.container__step}></section>
      {children}
   </section>
);
