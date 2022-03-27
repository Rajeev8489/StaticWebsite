import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
import theme from '../styles/theme';
import "/styles/globals.css";
import { useRouter as UseRouter } from "next/router";
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';


const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const router = UseRouter();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;


  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />

      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    </CacheProvider>
  );
}