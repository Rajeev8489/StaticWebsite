import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Badge, Container, Grid, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from "@mui/system";
import { useRouter as UseRouter } from "next/router";
import Navbar from './navbar';
import SideDrawer from './sideDrawer';
import NxtImage from '../../controls/nxtimage';
import logo from '../../../images/logo.png'


const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Header = () => {
    const router = UseRouter();

    const navLinks = [
        { title: 'Home', path: `/`, label: 'home' },
        { title: 'About Us', path: `/aboutus`, label: 'aboutus' },
        { title: 'Services', path: `/services`, label: 'services' },
        { title: 'Careers', path: `/careers`, label: 'careers' },
        { title: 'Contact Us', path: `/contactus`, label: 'contactus' },
    ];

    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={2}>
                        <NxtImage
                            src={logo}
                            width="180"
                            height="80"
                        />
                    </Grid>
                    <Grid item xs={10} sx={{ alignContent: 'flex-start', pt: 4, pr: 0 }}>
                        <Stack
                            spacing={2}
                            direction="row"
                            sx={{ justifyContent: `right` }}>

                            <Badge>
                                <FacebookIcon color="secondary" />
                            </Badge>
                            <Badge>
                                <TwitterIcon color="secondary" />
                            </Badge>
                            <Badge >
                                <LinkedInIcon color="secondary" />
                            </Badge>

                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            <AppBar position="relative" sx={{ height: '45px' }}>
                <Toolbar variant='dense' >
                    <Container
                        maxWidth="xl"
                        sx={{ display: `flex`, justifyContent: `right` }}
                    >
                        <Navbar navLinks={navLinks} />

                    </Container>
                    <SideDrawer navLinks={navLinks} />
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;