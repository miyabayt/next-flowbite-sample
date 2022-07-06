import type { ReactElement } from 'react'
import Layout from '@/layouts/layout'
import type { NextPageWithLayout } from '@/pages/_app'

const About: NextPageWithLayout = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <h1 className='mb-5 text-4xl font-bold'>About</h1>
      <span className='text-7xl'>💬</span>
    </div>
  )
}

About.getLayout = (page: ReactElement) => <Layout>{page}</Layout>

export default About
