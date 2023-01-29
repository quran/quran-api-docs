import { websiteName } from '@/constants'
import Head from 'next/head'
import React from 'react'
import { Navbar } from './navbar'

type Props = {
  children: React.ReactNode
  title?: string
}
export const GuideLayout = ({ children, title }: Props) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>
          {title} | {websiteName}{' '}
        </title>
      </Head>
      <Navbar />
      <div className="max-w-4xl prose mx-auto my-8">{children}</div>
    </div>
  )
}
