import { Typography } from '@mui/material'
import React from 'react'
import Head from 'next/head'


export default function aboutus() {
  return (
    <div>
      <Head>
        <title>Simpluris | About Us</title>
      </Head>
      <Typography align='center' variant="h4" component="h2">
        About Us
      </Typography>
    </div>
  )
}