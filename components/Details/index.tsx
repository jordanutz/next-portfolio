import { Anchor } from "../Anchor";
import { PageHeader } from "../PageHeader";
import { Social } from "../Social";

export const Details = () => (
   <>
      <div className="aside__subheader">
         <PageHeader level={2}>Jordan Utz</PageHeader>
         <PageHeader level={3}>Front End Software Engineer</PageHeader>
      </div>
      <Social />
      <div className="aside__quicklinks">
         <Anchor className="aside__anchor" href="/resume.pdf">
            Resume
         </Anchor>
         <Anchor className="aside__anchor" href="mailto:jordanutz@outlook.com">
            Say Hello!
         </Anchor>
      </div>
   </>
);
