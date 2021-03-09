import React, { FC, lazy } from 'react'
import { Breadcrumb, BreadcrumbItem } from '@vtex/store-ui'
import PageList from '@vtex/gatsby-theme-store/src/components/Search/List'
import Container from '@vtex/gatsby-theme-store/src/components/Container'
import SuspenseDevice from '@vtex/gatsby-theme-store/src/components/Suspense/Device'
import Controls from '@vtex/gatsby-theme-store/src/components/Search/Controls'
import {
  SearchTemplateContainer,
  SearchTemplateAside,
  SearchTemplateMain,
} from '@vtex/gatsby-theme-store/src/components/Search/SearchTemplate'
import type {
  SearchPageQueryQuery,
  SearchPageQueryQueryVariables,
} from '@vtex/gatsby-theme-store/src/templates/__generated__/SearchPageQuery.graphql'
import type { PageProps } from 'gatsby'

import { Banner } from './Banner'

const DesktopSearchFilters = lazy(
  () => import('@vtex/gatsby-theme-store/src/components/Search/Filters/Desktop')
)

const COLUMNS = [2, 3, 5]

type Props = PageProps<
  SearchPageQueryQuery,
  SearchPageQueryQueryVariables & { vtexCmsPageContent: any }
>

const AboveTheFold: FC<Props> = ({ data, pageContext }) => {
  const breadcrumb = (data.vtex.facets?.breadcrumb ?? []) as BreadcrumbItem[]

  return (
    <Container>
      <Breadcrumb breadcrumb={breadcrumb} type="SEARCH" />

      {pageContext.vtexCmsPageContent != null && (
        <Banner {...pageContext.vtexCmsPageContent} />
      )}

      <SearchTemplateContainer>
        <SearchTemplateAside>
          <SuspenseDevice device="desktop" fallback={null}>
            <DesktopSearchFilters
              isActive={(index: number) => index < 5}
              variant="desktop"
            />
          </SuspenseDevice>
        </SearchTemplateAside>

        <SearchTemplateMain>
          <Controls data={data} />
          <PageList initialData={data} columns={COLUMNS} />
        </SearchTemplateMain>
      </SearchTemplateContainer>
    </Container>
  )
}

export default AboveTheFold
