import type { FC } from 'react'
import React, { Fragment } from 'react'
import { Container } from '@vtex/store-ui'
import FooterPrincipal from './FooterPrincipal'

const AllFooter: FC = () => {
  const variant = 'footer'
  return(
    <Fragment>
      <Container>
        <FooterPrincipal variant = {`${variant}.principal`}/>
      </Container>
    </Fragment>
  )
}
export default AllFooter

