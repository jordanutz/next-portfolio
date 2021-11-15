import { Anchor } from "../Anchor";
import { Card } from "../Card";
import { PageHeader } from "../PageHeader";
import { Social } from "../Social";

import MainImg from "../../public/main.webp";

export const Aside = () => (
   <aside className="aside">
      <Card className="aside__card" image={MainImg.src} showArrow={false}>
         <section className="aside__subheader">
            <PageHeader level={2}>Jordan Utz</PageHeader>
            <PageHeader level={3}>Front End Software Engineer</PageHeader>
         </section>
         <Social />
         <section className="aside__quicklinks">
            <Anchor
               className="aside__anchor"
               href="https://drive.google.com/file/d/1kSfGKXYyAFxBkBOcTTrAB6phvBypGsSl/view?usp=sharing"
            >
               Resume
            </Anchor>
            <Anchor
               className="aside__anchor"
               href="mailto:jordanutz@outlook.com"
            >
               Say Hello!
            </Anchor>
         </section>
      </Card>
   </aside>
);
