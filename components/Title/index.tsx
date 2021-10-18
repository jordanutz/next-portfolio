/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { BsFillCursorFill } from "react-icons/bs";
import { Anchor } from "../Anchor";
import { Button } from "../Button";
import { Cover } from "../Cover";
import { Navigation } from "../Navigation";
import { Social } from "../Social";
import { TypeWriter } from "../TypeWriter";

import styles from "./Title.module.css";

export const Title = () => {
   const titleRef = useRef();
   return (
      <Cover
         className={styles.title}
         image="https://i.ibb.co/NrcND69/DSC03981-3.jpg"
      >
         <section className={styles.title__overlay}>
            <Navigation />
            <img src="https://i.ibb.co/6BJWW7n/DSC3017.jpg" alt="Jordan Utz" />
         </section>
         <section className={styles.title__content} ref={titleRef}>
            <h1>Jordan Utz</h1>
            <TypeWriter
               words={["Front End Software Engineer.", "Designer."]}
               level={2}
            />
            <p>
               I’m a software engineer specializing in building (and
               occasionally designing) exceptional digital experiences.
               Currently, I’m focused on building accessible, human-centered
               products at Kroger.
            </p>
            <Anchor href="https://drive.google.com/file/d/1pSxbKb7ZTj7DvMCaFk0zTeeIQNkLgEkn/view">
               <Button type="primary" icon={<BsFillCursorFill />}>
                  Download My Resume
               </Button>
            </Anchor>
         </section>
         <section className={styles.title__social}>
            <Social />
         </section>
      </Cover>
   );
};
