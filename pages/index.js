import Head from "next/head";
import {
  Title,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
  Footer,
} from "../components";

const Index = () => (
  <>
    <Head>
      <title>Jordan Utz | Full Stack Software Engineer</title>
      <meta
        name="description"
        content="Jordan Utz is a Full Stack Software Engineer with three years of professional development experience architecting scalable JavaScript applications."
      />
      <meta name="siteUrl" content="https://jordanutz.dev" />
    </Head>
    <main>
      <Title />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  </>
);

export default Index;
