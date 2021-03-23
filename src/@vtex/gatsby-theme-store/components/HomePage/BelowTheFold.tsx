import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Grid,
  InfoCard,
  InfoCardImage,
  InfoCardInfo,
  InfoCardInfoAction,
  RichMarkdown,
} from '@vtex/store-ui'
import type { PageProps } from 'gatsby'
import type { FC } from 'react'
import React from 'react'

import blackSkin from '../../../../images/black/take_care.png'
import type { HomePageQueryQuery } from '../../pages/__generated__/HomePageQuery.graphql'
import exampleStoreMd from './example-store.md'
import reachUsMd from './reach-us.md'

type Props = PageProps<HomePageQueryQuery>

const Block: FC = ({ children }) => <Box sx={{ my: 5 }}>{children}</Box>

const BelowTheFold: FC<Props> = () => (
  <>
    <Flex
      sx={{
        justifyContent: 'space-evenly',
        height: '400px',
        background: 'linear-gradient(90deg, #E3C5BD 0%, #E4C7C1 71.91%)',
      }}
    >
      <Flex sx={{ flexDirection: 'column', justifyContent: 'center' }}>
        <Text
          sx={{
            fontFamily: 'Playfair Display',
            fontSize: '75px',
            textAlign: 'center',
            lineHeight: 1,
            color: '#272639',
            marginBottom: '25px',
          }}
        >
          How to take
          <br /> care of a<br /> black skin?
        </Text>
        <Button
          sx={{
            fontFamily: 'DM Sans',
            color: '#272639',
            fontSize: '12px',
            fontWeight: 600,
            textTransform: 'uppercase',
            borderRadius: 0,
            background: '#FFF',
            padding: '7px 20px',
            cursor: 'pointer',
            width: '50%',
            margin: '0 auto',
          }}
        >
          Learn More
        </Button>
      </Flex>
      <Image src={blackSkin} />
      {/* <InfoCard>
        <InfoCardInfo title="New Promotion!">
          <InfoCardInfoAction href="/vintage-phone/p" label="BUY NOW" />
        </InfoCardInfo>
        <InfoCardImage
          height="300px"
          width="840px"
          href="/vintage-phone/p"
          src="https://storecomponents.vtexassets.com/assets/faststore/images/banner-infocard2___3f284742ba9ede3826bc0721f0789694.png?height=300&aspect=true"
          alt="infocard-banner"
        />
      </InfoCard> */}
    </Flex>

    {/* This is an example store built using the VTEX platform.
    Want to know more? */}
    {/* <Flex sx={{ justifyContent: 'center', background: '' }}>
      <RichMarkdown text={exampleStoreMd} variant="question" />
    </Flex>

    <Block>
      <RichMarkdown text={reachUsMd} variant="link" />
    </Block> */}
  </>
)

export default BelowTheFold
