import { ReactNode, FC } from "react";
import styles from "./Tag.module.css";

interface TagProps {
   title: string;
   icon: ReactNode;
}

export const Tag: FC<TagProps> = ({ title, icon }) => (
   <section className={styles.tag}>
      {icon}
      <span>{title}</span>
   </section>
);
