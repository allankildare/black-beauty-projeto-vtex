import React from 'react'
import type { FC } from 'react'
import { Flex, Button, Text } from '@vtex/store-ui'

import MainImg from './MainImg'

const MainCover: FC = () => {
  const variant = 'mainCover'

  return (
    <Flex variant={`${variant}`}>
      <MainImg />
      <Text variant={`${variant}.mainTitle`}>
        Beauty looks to
        <br />
        black beauty.
      </Text>
      <Button variant={`${variant}.coverButton`}>See all</Button>
    </Flex>
  )
}

export default MainCover
