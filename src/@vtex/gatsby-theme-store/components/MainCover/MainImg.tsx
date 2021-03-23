import React from 'react'
import type { FC } from 'react'
import { Box, Text } from '@vtex/store-ui'

import mainPhoto from '../../../../images/black/main.png'

const MainImg: FC = () => {
  const variant = 'mainImg'

  return (
    <Box
      variant={`${variant}.imgBox`}
      sx={{ backgroundImage: `url(${mainPhoto})` }}
    >
      <Text variant={`${variant}.newMake`}>New make-up collection</Text>
    </Box>
  )
}

export default MainImg
