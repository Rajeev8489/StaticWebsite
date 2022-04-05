import { Paper, Typography } from '@mui/material'
import React from 'react'

export default function CompanyAddress() {
    return (
        <div>
            <Paper sx={{paddingTop:'10px'}}>
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
            <Typography gutterBottom variant="body2" className='footerAddress'>
                India
            </Typography>
            </Paper>
        </div>
    )
}
