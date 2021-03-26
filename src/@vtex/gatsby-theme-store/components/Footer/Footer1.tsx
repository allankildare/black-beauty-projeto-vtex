import React from 'react'
import type { FC } from 'react'
import { Flex, Grid, Heading, Text, Box } from '@vtex/store-ui'

const variant = 'footer.footer1'

const Footer1: FC = () => {
  return (
    <>
      <Flex variant={`${variant}`}>

        <Grid variant={`${variant}.boxFooter`} sx={{marginRight: '60px'}}>
          <Heading sx={{ fontFamily: 'Playfair Display' }}>About Us</Heading>
          <Flex variant={`${variant}.boxFooter.text`} sx={{flexDirection: 'column', marginLeft: '1px'}}>
            <Text>About us</Text>
            <Text>Regimen</Text>
            <Text>Shop all</Text>
          </Flex>
        </Grid>

        <Grid variant={`${variant}.boxFooter`} sx={{marginRight: '60px'}}>
          <Heading sx={{ fontFamily: 'Playfair Display' }}>
            Costumer Service
          </Heading>
          <Flex variant={`${variant}.boxFooter.text`} sx={{flexDirection: 'column', marginLeft: '1px'}}>
            <Text>FAQ</Text>
            <Text>Return</Text>
            <Text>Contact us</Text>
          </Flex>
        </Grid>

        <Grid variant={`${variant}.boxFooter`}>
          <Heading sx={{ fontFamily: 'Playfair Display' }}>Connect</Heading>
          <Flex variant={`${variant}.boxFooter.text`} sx={{flexDirection: 'column', marginLeft: '1px'}}>
            <Text>@blackbeauty</Text>
          </Flex>
        </Grid>
        
      </Flex>
    </>
  )
}

export default Footer1
