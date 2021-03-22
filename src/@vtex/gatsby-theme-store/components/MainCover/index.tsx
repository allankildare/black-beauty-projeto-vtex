import React from 'react'
import type { FC } from 'react'
import { useIntl } from '@vtex/gatsby-plugin-i18n'
import { Flex, Header } from '@vtex/store-ui'
import { jsx } from 'theme-ui'

import MainImg from './MainImg'
import MainButton from './MainButton'

const MainCover: FC = () => {
  const variant = 'mainCover'

  return (
    <Flex
      variant={`${variant}`}
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: '90vh',
      }}
    >
      <MainImg />
      <h1
        style={{
          zIndex: 2,
          textAlign: 'center',
          color: '#D69D7D',
          letterSpacing: '4px',
          position: 'absolute',
          fontFamily: 'Playfair Display',
          fontSize: '105px',
          fontWeight: 400,
        }}
      >
        Beauty looks to
        <br />
        black beauty.
      </h1>
      <button
        style={{
          zIndex: 2,
          position: 'absolute',
          bottom: '48px',
          backgroundColor: '#272639',
          padding: '12px 35px',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        See all
      </button>
    </Flex>
  )
}

export default MainCover
