import { TagProps } from "../types/tag";

export const Tag = ({ title, icon }: TagProps) => (
   <section className="tag">
      {icon}
      <span>{title}</span>
   </section>
);
