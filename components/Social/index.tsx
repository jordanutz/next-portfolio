import { Anchor } from "../Anchor";
import {
   RiInstagramLine,
   RiLinkedinFill,
   RiCodepenFill,
   RiGithubFill,
   RiSpotifyFill,
} from "react-icons/ri";

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
      <Anchor href="https://www.instagram.com/thejordanutz" label="Instagram">
         <RiInstagramLine />
      </Anchor>
      <Anchor href="https://open.spotify.com/user/jordanuky" label="Spotify">
         <RiSpotifyFill />
      </Anchor>
   </section>
);
