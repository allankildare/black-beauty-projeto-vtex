import React from 'react'
import type { FC } from 'react'
import { Flex, Grid, Box, Heading, Text } from '@vtex/store-ui'
import box1Img from './img/box1.png'
import box2Img from './img/box2.png'
import box3Img from './img/box3.png'

const RelatedProducts: FC = () => {
  return (
    <Grid sx={{placeItems: 'center',
        background: '#FAF7F1',
        padding: '145px 0'
        }}>
        <Grid columns={[2, '250px 250px']} sx={{
            gridTemplateRows: '250px 250px',
            gridTemplateAreas: '"box1 box2" "box1 box3"'
        }}>
        
        <Box sx={{
            gridArea: 'box1',
            backgroundImage: `url(${box1Img})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            }} />
        <Box sx={{
            gridArea: 'box2',
            backgroundImage: `url(${box2Img})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            }} />
        <Box sx={{
            gridArea: 'box3',
            backgroundImage: `url(${box3Img})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            }} />
        </Grid>
    </Grid>
  )
}

export default RelatedProducts