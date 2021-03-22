import { useIntl } from '@vtex/gatsby-plugin-i18n'
import { Flex, Header } from '@vtex/store-ui'
import React, { Fragment } from 'react'
import type { FC } from 'react'

import Lado1 from './lado1'
import Lado2 from './lado2'

const Footer: FC = () => {
  const variant = 'footer'

  return (
    <Flex variant={`${variant}`}>
      <Lado1 />
      <Lado2 />
    </Flex>
  )
}

export default Footer
