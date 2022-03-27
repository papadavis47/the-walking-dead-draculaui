import Head from "next/head";
import Image from "next/image";
import ImageHero from "../components/ImageHero.js";
import { Heading, Box, Paragraph, Divider, Badge } from "@dracula/dracula-ui";
import PicForHero from "../components/PicForHero.js";

export default function Home() {
  return (
    <>
      <div className='wrapper'>
        <Box p='lg'>
          <Heading
            color='red'
            size='2xl'
            style={{ fontSize: "76px", fontFamily: "Luxurious Roman, cursive" }}
          >
            The Walking Dead
          </Heading>
          <Heading
            color='purpleCyan'
            size='xl'
            py='sm'
            style={{ fontFamily: "Luxurious Roman, cursive" }}
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
      <Badge color='animated'>Fun Badge</Badge>
    </>
  );
}
