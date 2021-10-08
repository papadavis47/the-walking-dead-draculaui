import Head from "next/head";
import Image from "next/image";
import { Heading, Box, Paragraph } from "@dracula/dracula-ui";

export default function Home() {
  return (
    <div className='page-wrapper'>
      <Box p='lg'>
        <Heading size='2xl'>The Walking Dead</Heading>
        <Heading size='xl'>Season 11 😱</Heading>
        <Paragraph color='purpleCyan'>A loving fan site!</Paragraph>
        <Image
          src='/title1.jpg'
          width={200}
          height={200}
          alt='Walking Dead Title'
          quality={100}
        />
      </Box>
      <Box>
        <Image
          src='/negan1.jpg'
          width={400}
          height={400}
          alt='Character of Negan - The Walking Dead'
        />
      </Box>
    </div>
  );
}
