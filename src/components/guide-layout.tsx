import { websiteName } from '@/constants'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { Navbar } from './navbar'

type Props = {
  children: React.ReactNode
  title?: string
}
export const GuideLayout = ({ children, title }: Props) => {
  const router = useRouter()
  const basePath = router.pathname
  return (
    <div className="min-h-screen">
      <Head>
        <title>
          {title} | {websiteName}{' '}
        </title>
      </Head>
      <Navbar basePath={basePath} />
      <div className="max-w-4xl prose mx-auto my-8 md:px-0 px-4">
        {children}
      </div>
    </div>
  )
}
