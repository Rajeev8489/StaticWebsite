import { Box, Container, Typography } from '@mui/material';
import Head from 'next/head';
import NxtImage from '../components/controls/nxtimage';
import homebackground from '../images/homebackground.jpg';


export default function Home() {
  return (
    <>
      <Head>
        <title>Simpluris | Home</title>
      </Head>
        <Box>
        <NxtImage
        sx={{  opacity: 0.7 }}
          src={homebackground}
          width="180"
          height="80"
          layout="responsive"
        />
        </Box> 
    </>
  )
}