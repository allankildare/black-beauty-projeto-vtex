import { useIntl } from '@vtex/gatsby-plugin-i18n'
import Minicart from '@vtex/gatsby-theme-store/src/components/Minicart'
import SearchBar from '@vtex/gatsby-theme-store/src/components/SearchBar'
import { Flex, Grid, Header, LocalizedLink, Heading, Text, Link, Image, Box } from '@vtex/store-ui'
import type { FC } from 'react'
import React, { Fragment } from 'react'

// fonts
import "@fontsource/rubik/800.css"
import "@fontsource/dm-sans"

// svg's
import language from './lang.svg'
import cart from './carrinho.svg'
import login from './login.svg'
import heart from './heart-solid.svg'

import Login from '../../../../components/Login'
import Logo from './Logo'
import Menu from './Menu'
import NotificationBar from './NotificationBar'
import OverMenu from './OverMenu'

const StoreHeader: FC = () => {
  const variant = 'headerBlackBeauty'
  const { formatMessage } = useIntl()

  return (
    <Fragment>
      {/* <NotificationBar
        text={formatMessage({ id: 'notification-bar.sale' })}
        variant={`${variant}.notificationbar`}
      /> */}
      {/* <OverMenu variant={`${variant}.overmenu`} /> */}
      <Header variant={variant}> 
        <Flex sx={{ flexDirection: 'column', justifyContent: 'center', width: '100%', padding: '16px 100px',}}>
          <Grid columns={[7, '1fr 3fr 3fr 1fr 1fr 1fr 1fr']} sx={{
              gridTemplateAreas: '"about store logo language login minicart"',
              gap: 0,
              alignItems: 'center'
            }}>
            <LocalizedLink sx={{gridArea: 'about'}} className="first" to="/about">
              About us
            </LocalizedLink>
            <LocalizedLink to="/page" sx={{gridArea: 'stores'}}>Stores</LocalizedLink>
            <Heading sx={{margin: '0 auto', fontFamily: 'Rubik', gridArea: 'logo'}}>Black/Beauty</Heading>
            <Flex sx={{ gridArea: 'language', justifyContent: 'flex-end', marginRight: '18px' }}>
              <Image src={language} />
              <Text>En</Text>
            </Flex>
            
            <Login sx={{gridArea: 'login'}} />
            <Image src={heart} sx={{width: '18px', margin: '0 auto'}}/>
            <Minicart sx={{gridArea: 'minicart'}} />
          </Grid>

          <Flex sx={{justifyContent: 'center'}}>
            <Link sx={{ marginRight: '60px' }} href="#!">Hair</Link>
            <Link sx={{ marginRight: '60px' }} href="#!">Make-up</Link>
            <Link href="#!">Perfume</Link>
          </Flex>
        </Flex>
        {/* <Flex variant={`${variant}.left`}>
          <Logo variant={`${variant}.logo`} />
          <Menu variant={`${variant}.menu`} />
        </Flex>
        <Flex variant={`${variant}.right`}>
          <SearchBar placeholder="Search" aria-label="Search" />
        </Flex> */}
      </Header>
    </Fragment>
  )
}

export default StoreHeader
