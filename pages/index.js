import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Heading, Box, Paragraph } from "@dracula/dracula-ui";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Box p='lg'>
        <Heading size='2xl' style={{ fontFamily: "Arial", fontSize: "64px" }}>
          The Walking Dead
        </Heading>
        <Heading color='purpleCyan' size='xl'>
          A Loving Fansite for Season 11!
        </Heading>
      </Box>
      <div className={styles.holder}>
        <div className={styles.pic}>
          <Image
            src='/reapers1.jpg'
            width={400}
            height={400}
            alt='Reapers on the hunt'
          />
        </div>
        <div className={styles.pic}>
          <Image
            src='/negan1.jpg'
            width={400}
            height={400}
            alt='Character of Negan - The Walking Dead'
          />
        </div>
        <div className={styles.pic}>
          <Image
            src='/rosita1.jpg'
            width={400}
            height={400}
            alt='Rosita after clearning Walkers'
          />
        </div>
      </div>
      <Image
        src='/title1.jpg'
        width={200}
        height={200}
        alt='Walking Dead Title'
        quality={100}
      />
      <Box></Box>
    </div>
  );
}
