import Stack from "@mui/material/Stack";
import React, { useEffect } from 'react'
import Toolbar from "@mui/material/Toolbar";
import MuiNextLink from "../../controls/MuiNextLink";


const Navbar = ({ navLinks }) => {
     const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
     return (
          <Toolbar
               component="nav"
               sx={{
                    display: { xs: `none`, md: `flex` }
               }}
          >
               <Stack direction="row" spacing={4}>
                    {navLinks.map(({ title, path, label }, i) => (
                         <MuiNextLink
                              key={`${title}${i}`}
                              href={path}
                              variant="button"
                              sx={{ opacity: 0.7 }}
                              label={label}
                              styleClass='Navbar'
                         >
                              {title}
                         </MuiNextLink>
                    ))}
               </Stack>
          </Toolbar>
     );
};

export default Navbar;