import {
  Carousel,
  LocalizedLink,
  Flex,
  Grid,
  Text,
  Button,
  Box,
} from '@vtex/store-ui'
import Container from '@vtex/gatsby-theme-store/src/components/Container'
import type { PageProps } from 'gatsby'
import type { FC } from 'react'
import React from 'react'

import type { HomePageQueryQuery } from '../../pages/__generated__/HomePageQuery.graphql'
import ShelfProducts from '../Shelf/ShelfProducts'
import RichTextRow from './RichTextRow'
import MainCover from '../MainCover'

type Props = PageProps<HomePageQueryQuery>

const Fold: FC<Props> = ({ data: { content, vtex } }) => (
  <>
    {/* <Carousel
      {...content?.blocks[0]?.props}
      height="540px"
      width="360px"
      link={LocalizedLink}
    /> */}
    <MainCover />
    {/* <RichTextRow /> */}
    {/* produtos */}
    <Container sx={{ background: '#FAF7F1', fontFamily: 'DM Sans' }}>
      <div style={{}}>
        <Text
          sx={{
            fontFamily: 'DM Sans',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#878695',
            fontSize: '15px',
            paddingTop: '80px',
          }}
        >
          Our Inspirations
        </Text>
        <Text
          sx={{
            fontFamily: 'DM Sans',
            textAlign: 'center',
            fontSize: '36px',
            fontWeight: '500',
            color: '#272639',
            lineHeight: 1.1,
            padding: '12px 0 30px',
          }}
        >
          Meet the <span style={{ textDecoration: 'line-through' }}>faces</span>{' '}
          skins behind
          <br />
          our new collection.
        </Text>
      </div>
      <Flex sx={{ justifyContent: 'center' }}>
        <Box
          sx={{
            width: '350px',
            height: '440px',
            backgroundColor: '#858292',
            marginRight: '20px',
            position: 'relative',
          }}
        >
          <Text
            sx={{
              textTransform: 'uppercase',
              color: '#FAF7F1',
              textAlign: 'center',
              paddingTop: '15px',
              fontSize: '15px',
            }}
          >
            Meet Carla
          </Text>
          <Text
            sx={{
              fontFamily: 'Playfair Display',
              fontSize: '60px',
              textAlign: 'center',
              lineHeight: '.9',
              color: '#D3B4A2',
            }}
          >
            Beauty
            <br /> inspired by
            <br /> real life
          </Text>
          <Button
            type="button"
            sx={{
              borderBottom: '1px solid #FAF7F1',
              background: 'transparent',
              borderRadius: 0,
              padding: 0,
              paddingBottom: '8px',
              outline: 'none',
              textTransform: 'uppercase',
              letterSpacing: '.8px',
              fontSize: '14px',
              cursor: 'pointer',
              position: 'absolute',
              bottom: '25px',
              left: '50%',
              transform: 'translate(-50%, 0)',
            }}
          >
            See the history
          </Button>
        </Box>

        <Box
          sx={{
            width: '350px',
            height: '440px',
            backgroundColor: '#CBA9B2',
            position: 'relative',
          }}
        >
          <Text
            sx={{
              textTransform: 'uppercase',
              color: '#FAF7F1',
              textAlign: 'center',
              paddingTop: '15px',
              fontSize: '15px',
            }}
          >
            Meet Rose
          </Text>
          <Text
            sx={{
              fontFamily: 'Playfair Display',
              fontSize: '75px',
              textTransform: 'uppercase',
              textAlign: 'center',
              lineHeight: '.9',
              color: '#FFF',
              position: 'absolute',
              bottom: '65px',
              left: '50%',
              transform: 'translate(-50%, 0)',
            }}
          >
            Skin
            <br /> First
          </Text>
          <Button
            type="button"
            sx={{
              borderBottom: '1px solid #FAF7F1',
              background: 'transparent',
              borderRadius: 0,
              padding: 0,
              paddingBottom: '8px',
              outline: 'none',
              textTransform: 'uppercase',
              letterSpacing: '.8px',
              fontSize: '14px',
              cursor: 'pointer',
              position: 'absolute',
              bottom: '25px',
              left: '50%',
              transform: 'translate(-50%, 0)',
            }}
          >
            See the history
          </Button>
        </Box>
      </Flex>
      <ShelfProducts
        {...content?.blocks[1]?.props}
        products={vtex.products}
        showArrows
        showDots
      />

      <Flex sx={{ justifyContent: 'center', paddingBottom: '50px' }}>
        <Grid
          sx={{
            width: '350px',
            height: '440px',
            backgroundColor: '#324C2F',
            placeItems: 'center',
            marginRight: '20px',
          }}
        >
          <Text
            sx={{
              fontFamily: 'Playfair Display',
              fontSize: '50px',
              textAlign: 'center',
              lineHeight: 1,
              paddingBottom: '20px',
              color: '#FFF',
            }}
          >
            Beauty
            <br />
            should
            <br />
            make
            <br />
            you feel
            <br />
            good.
          </Text>
        </Grid>
        <Grid
          sx={{
            width: '350px',
            height: '440px',
            backgroundColor: '#EBB8CB',
            placeItems: 'center',
            position: 'relative',
          }}
        >
          <Text
            sx={{
              fontFamily: 'Playfair Display',
              fontSize: '66px',
              textAlign: 'center',
              lineHeight: 1,
              paddingBottom: '20px',
              color: '#272639',
            }}
          >
            Honest
            <br />
            beauty
          </Text>
        </Grid>
      </Flex>
    </Container>
  </>
)

export default Fold
