import { Box, Typography } from '@mui/material'
import React from 'react'
import Head from 'next/head'
import NxtImage from '../components/controls/nxtImage'
import underconstruction from '../images/underconstruction.png';


export default function aboutus() {
  return (
    <div>
      <Head>
        <title>Simpluris | About Us</title>
      </Head>
      <Typography align='center' variant="h4" component="h2">
        About Us
      </Typography>
      <Box>
        <NxtImage
          src={underconstruction}
          width="180"
          height="80"
          layout="responsive"
        />
      </Box>
    </div>
  )
}