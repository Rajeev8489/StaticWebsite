import { Box, Container, Typography } from '@mui/material';
import Head from 'next/head';
import CompanyAddress from '../components/controls/companyAddress';
import NxtImage from '../components/controls/nxtImage';
import homebackground from '../images/background1.jpg';


export default function Home() {
  return (
    <>
      <Head>
        <title>Simpluris | Home</title>
      </Head>
        <div className='background_image'>
        <NxtImage
          src={homebackground}
          width="180"
          height="80"
          layout="responsive"
        />
        </div> 

    </>
  )
}