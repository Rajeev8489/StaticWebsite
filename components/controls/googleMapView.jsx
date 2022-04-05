import { Card } from '@mui/material'
import React from 'react'
import googlelocation from '../../images/googlelocation.png'
import NxtImage from './nxtImage'

export default function googlemapview() {
  return (
    <div>
      <Card>
        <NxtImage
          src={googlelocation}
          height="50"
          layout="responsive"
        />
      </Card>
      </div>
  )
}
