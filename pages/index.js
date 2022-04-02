import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ImageHero from "../components/ImageHero.js";
import { Heading, Box, Paragraph, Divider, Badge, Text } from "@dracula/dracula-ui";
import PicForHero from "../components/PicForHero.js";

export default function Home() {
  return (
    <>
      <div className='wrapper'>
        <Box p='lg'>
          <Heading
            color='red'
            size='2xl'
            className='mainTitle' // style={{ fontSize: "76px", fontFamily: "Luxurious Roman, cursive" }}
          >
            The Walking Dead
          </Heading>
          <Heading
            color='purpleCyan'
            size='xl'
            py='sm'
            // style={{ fontFamily: "Luxurious Roman, cursive" }}
          >
            An Experimental Fansite for Season 11!
          </Heading>
        </Box>
        <ImageHero>
          <PicForHero src='/reapers1.jpg' alt='Reapers ready to do their thing!' />
          <PicForHero src='/negan1.jpg' alt='A Major TWD bad guy.' />
          <PicForHero src='/rosita1.jpg' alt='Rosita after doing work.' />
          <PicForHero src='/carol1.jpg' alt='Carol on the Hunt' />
        </ImageHero>
      </div>
      <Box style={{ textAlign: "center" }}>
        <p>I am checking out the font changes on this page</p>
        <Divider color='green' />
        <Paragraph>Why is this not showing up??</Paragraph>
      </Box>
      <Box my='md' style={{ textAlign: "center" }}>
        <Link href='/characters'>
          <a>
            <Badge color='animated'>Characters</Badge>
          </a>
        </Link>
      </Box>
      <Text color='purple' align='center' as='p'>
        Negan is beginning his own show with Maggie soon. I am looking forward to that.
      </Text>
    </>
  );
}
