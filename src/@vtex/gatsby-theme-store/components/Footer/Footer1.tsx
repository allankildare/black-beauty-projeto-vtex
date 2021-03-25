import React from 'react'
import type { FC } from 'react'
import { Flex, Grid, Heading, Text, Box } from '@vtex/store-ui'

const variant = 'footer.footer1'

const Footer1: FC = () => {
  return (
    <>
      <Flex variant={`${variant}`}>
        <Grid variant={`${variant}.boxFooter`}>
          <Heading sx={{ fontFamily: 'Playfair Display' }}>About Us</Heading>
          <ul>
            <li>About us</li>
            <li>Regimen</li>
            <li>Shop all</li>
          </ul>
        </Grid>
        <Grid variant={`${variant}.boxFooter`}>
          <Heading sx={{ fontFamily: 'Playfair Display' }}>
            Costumer Service
          </Heading>
          <ul>
            <li>FAQ</li>
            <li>Return</li>
            <li>Contact us</li>
          </ul>
        </Grid>
        <Grid variant={`${variant}.boxFooter`}>
          <Heading sx={{ fontFamily: 'Playfair Display' }}>Connect</Heading>
          <ul>
            <li>@blackbeauty</li>
          </ul>
        </Grid>
      </Flex>
    </>
  )
}

export default Footer1
