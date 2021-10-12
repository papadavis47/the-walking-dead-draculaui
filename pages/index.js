import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ImageHero from "../components/ImageHero.js";
import { Heading, Box, Paragraph } from "@dracula/dracula-ui";
import PicForHero from "../components/PicForHero.js";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Box p='lg'>
        <Heading size='2xl' style={{ fontFamily: "Arial", fontSize: "64px" }}>
          The Walking Dead
        </Heading>
        <Heading color='purpleCyan' size='xl'>
          An Experimental Fansite for Season 11!
        </Heading>
      </Box>
      <ImageHero>
        <PicForHero
          src='/reapers1.jpg'
          alt='Reapers ready to do their thing!'
        />
        <PicForHero src='/negan1.jpg' alt='A Major TWD bad guy.' />
        <PicForHero src='/rosita1.jpg' alt='Rosita after doing work.' />
        <PicForHero src='/carol1.jpg' alt='Carol on the Hunt' />
      </ImageHero>
    </div>
  );
}
