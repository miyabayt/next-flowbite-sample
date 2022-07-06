import type { ReactElement } from 'react'
import Layout from '@/layouts/layout'
import type { NextPageWithLayout } from '@/pages/_app'

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
