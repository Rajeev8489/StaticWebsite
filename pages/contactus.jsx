import React from 'react'
import Head from 'next/head'
import { Container, Grid, Paper, Typography } from '@mui/material'
import CompanyAddress from '../components/controls/companyAddress'
import GoogleMapView from '../components/controls/googleMapView'
import Contactform from './forms/contactForm'


export default function contactus() {
  return (
    <>
      <Head>
        <title>Simpluris | Contact Us</title>
      </Head>
      <Container>
        <Grid container className='formContainer'>
          <Grid item xs={12} md={6}>
            <Contactform />
          </Grid>
          <Grid item xs={12} md={6} className='companyAddress'>
            <CompanyAddress />
            <GoogleMapView />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}