import React from 'react'
import type { FC } from 'react'
import { Flex, Heading, Text, Box, Input, Button } from '@vtex/store-ui'

const variant = 'footer'

const mailingList: FC = () => {
  return (
    <Flex sx={{ flexDirection: 'column' }} variant={`${variant}.footer2`}>
      <Box>
        <Heading variant={`${variant}.mailingList`}>
          Join Our
          <br />
          Mailing List
        </Heading>
        <Text>
          Sign up now and be the first to know about exclusive offers.
        </Text>
        <Input placeholder="Enter your e-mail" />
        <Button>Send</Button>
      </Box>
    </Flex>
  )
}

export default mailingList
