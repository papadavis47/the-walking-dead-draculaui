import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ImageHero from "../components/ImageHero.js";
import { Heading, Box, Paragraph } from "@dracula/dracula-ui";

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
      <ImageHero />
    </div>
  );
}
