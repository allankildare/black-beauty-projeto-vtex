import { useIntl } from '@vtex/gatsby-plugin-i18n'
import { Flex, Text, Link } from '@vtex/store-ui'
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
      <Flex variant={`${variant}.copyright`}>
        <Text sx={{marginRight: '32px'}}>2019 Black Beauty. All Right Reserved.</Text>
        <Link href="#!" sx={{marginRight: '16px'}}>Terms & Conditions</Link>
        <Link href="#!" sx={{marginRight: '16px'}}>Privacy Policy</Link>
        <Link href="#!">Web Acessibility</Link>
      </Flex>
    </Flex>
  )
}

export default Footer
