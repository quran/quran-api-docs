import React from 'react'
import { Navbar } from './navbar'

type Props = {
  children: React.ReactNode
}
export const GuideLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl prose mx-auto my-8">{children}</div>
    </div>
  )
}
