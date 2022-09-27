import { TagProps } from "../types";

export const Tag = ({ title, icon }: TagProps) => (
  <section className="tag">
    {icon}
    <span>{title}</span>
  </section>
);
