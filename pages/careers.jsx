import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import NxtImage from '../components/controls/nxtImage'
import underconstruction from '../images/underconstruction.png';

export default function careers() {
  return (
    <div>
      <Head>
        <title>Simpluris | Careers</title>
      </Head>
      <Typography align='center' variant="h4" component="h2">
        Careers
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