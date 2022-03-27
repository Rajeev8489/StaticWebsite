import React, { useState, useEffect, Component } from 'react'
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/system";
import { Avatar, Badge, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MuiNextLink from '../../controls/MuiNextLink';
import { deepOrange } from '@mui/material/colors';
import EmailIcon from '@mui/icons-material/Email';


const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Footer = () => {

     return (
          <>
               <AppBar position="relative" sx={{ bottom: 0 }}>
                    <Container>
                         <Grid container>
                              <Grid item xs={12} md={6}>
                                   <Typography
                                        gutterBottom variant="h6" component="h1" className='pageTitle'>
                                        Quick Link
                                   </Typography>
                                   <Divider variant="middle" color="white" />
                                   <br />
                                   <Grid container>
                                        <Grid item xs={6}>
                                             <Stack
                                                  spacing={1}
                                                  direction="column"
                                             >
                                                  <MuiNextLink
                                                       key='About Us'
                                                       href='/aboutus'
                                                       variant="button"
                                                       sx={{ opacity: 0.7 }}
                                                       styleClass='footerLink'
                                                  >
                                                       About Us
                                                  </MuiNextLink>
                                                  <MuiNextLink
                                                       key='services'
                                                       href='/services'
                                                       variant="button"
                                                       sx={{ opacity: 0.7 }}
                                                       styleClass='footerLink'
                                                  >
                                                       Services
                                                  </MuiNextLink>
                                                  <MuiNextLink
                                                       key='careers'
                                                       href='/careers'
                                                       variant="button"
                                                       sx={{ opacity: 0.7 }}
                                                       styleClass='footerLink'
                                                  >
                                                       Careers
                                                  </MuiNextLink>
                                                  <MuiNextLink
                                                       key='contactus'
                                                       href='/contactus'
                                                       variant="button"
                                                       sx={{ opacity: 0.7 }}
                                                       styleClass='footerLink'
                                                  >
                                                       Contact Us
                                                  </MuiNextLink>
                                             </Stack>
                                        </Grid>
                                        <Grid item xs={6}>
                                             <Stack
                                                  spacing={1}
                                                  direction="column"
                                             >
                                                  <MuiNextLink
                                                       key='termsconditons'
                                                       href='/#'
                                                       variant="button"
                                                       sx={{ opacity: 0.7 }}
                                                       styleClass='footerLink'
                                                  >
                                                       Terms Conditions
                                                  </MuiNextLink>
                                                  <MuiNextLink
                                                       key='privacypolicy'
                                                       href='/#'
                                                       variant="button"
                                                       sx={{ opacity: 0.7 }}
                                                       styleClass='footerLink'
                                                  >
                                                       Privacy Policy
                                                  </MuiNextLink>
                                             </Stack>
                                        </Grid>
                                   </Grid>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                   <Typography
                                        gutterBottom variant="h6" component="h1" className='pageTitle'>
                                        Contact
                                   </Typography>
                                   <Divider variant="middle" color="white" />
                                   <br />
                                   <Typography gutterBottom variant="body1" className='footerAddress'>
                                        Address:
                                   </Typography>
                                   <Typography gutterBottom variant="body2" className='footerAddress'>
                                        No.11,2nd floor, R V Road,
                                   </Typography>
                                   <Typography gutterBottom variant="body2" className='footerAddress'>
                                        Southend Circle Metro Station,
                                   </Typography>
                                   <Typography gutterBottom variant="body2" className='footerAddress'>
                                        Basavanagudi, Bengaluru,
                                   </Typography>
                                   <Typography gutterBottom variant="body2" className='footerAddress'>
                                        Karnataka - 560 004
                                   </Typography>
                                   <Stack
                                        spacing={1}
                                        className='footerAddress'
                                        direction="row">
                                        <EmailIcon />
                                        <Typography variant="body2">
                                             suppport@simpluris.com
                                        </Typography>
                                   </Stack>
                                   <Stack
                                        paddingRight="15px"
                                        spacing={2}
                                        direction="row"
                                        sx={{ justifyContent: `right` }}
                                   >
                                        <FacebookIcon />
                                        <TwitterIcon />
                                        <LinkedInIcon />
                                   </Stack>
                              </Grid>
                         </Grid>
                         <br /><br />
                         <Divider variant="middle" color="white" />
                         <br />
                         <Typography
                              align='center'
                              variant='caption'
                              component="div"
                         >
                              &#169; 2022 Simpluris Technologies
                         </Typography>
                         <br />
                    </Container>
               </AppBar>
          </>
     );
};

export default Footer;