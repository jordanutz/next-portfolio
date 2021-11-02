import { FC } from "react";
import { TagProps } from "../../models/tag";

export const Tag: FC<TagProps> = ({ title, icon }) => (
   <section className="tag">
      {icon}
      <span>{title}</span>
   </section>
);
