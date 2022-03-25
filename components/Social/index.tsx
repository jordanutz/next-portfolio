import { Anchor } from "../Anchor";
import {
   RiLinkedinFill,
   RiCodepenFill,
   RiGithubFill,
} from "react-icons/ri";
import { IoLogoApple } from "react-icons/io";

export const Social = () => (
   <section className="social">
      <Anchor href="https://github.com/jordanutz" label="Github">
         <RiGithubFill />
      </Anchor>
      <Anchor href="https://www.linkedin.com/in/jordanutz/" label="LinkedIn">
         <RiLinkedinFill />
      </Anchor>
      <Anchor href="https://codepen.io/jordanutz" label="Codepen">
         <RiCodepenFill />
      </Anchor>
      <Anchor href="https://open.spotify.com/user/jordanuky" label="Spotify">
         <IoLogoApple />
      </Anchor>
   </section>
);
