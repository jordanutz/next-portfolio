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
      <Anchor href="https://github.com/jordanutz">
         <RiGithubFill />
      </Anchor>
      <Anchor href="https://www.linkedin.com/in/jordanutz/">
         <RiLinkedinFill />
      </Anchor>
      <Anchor href="https://codepen.io/jordanutz">
         <RiCodepenFill />
      </Anchor>
      <Anchor href="https://www.instagram.com/thejordanutz">
         <RiInstagramLine />
      </Anchor>
      <Anchor href="https://open.spotify.com/user/jordanuky">
         <RiSpotifyFill />
      </Anchor>
   </section>
);
