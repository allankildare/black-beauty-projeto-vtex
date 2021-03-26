import {Heading} from '@vtex/store-ui'
import React from 'react'
import type {FC} from 'react'

const FooterPrincipal: FC<{variant?: string}> = ({variant})=>{
  <Heading variant={variant}>
    Bom dia
  </Heading>
}

export default FooterPrincipal