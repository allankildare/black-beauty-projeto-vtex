import { useIntl } from '@vtex/gatsby-plugin-i18n'
import { Flex, Container, Grid, Button } from '@vtex/store-ui'
import React from 'react'
import type { FC } from 'react'

import Footer1 from './Footer1'
import Footer2 from './Footer2'

const Footer: FC = () => {
  const variant = 'footer'

  return (
    <Flex variant={`${variant}`} sx={{ justifyContent: 'space-between' }}>
      <Footer1 />
      <Footer2 />
    </Flex>
  )
}

export default Footer
