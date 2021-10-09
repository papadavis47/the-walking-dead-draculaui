import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Heading, Box, Paragraph } from "@dracula/dracula-ui";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Box p='lg'>
        <Heading size='2xl'>The Walking Dead</Heading>
        <Heading color='purpleCyan' size='xl'>
          A Loving Fansite for Season 11!
        </Heading>
      </Box>
      <Image
        src='/negan1.jpg'
        width={400}
        height={400}
        alt='Character of Negan - The Walking Dead'
      />
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
