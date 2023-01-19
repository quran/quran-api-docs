import { APIs } from '@/constants'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'

type ButtonProps = {
  children: React.ReactNode
  href: string
}
const Button = ({ children, href }: ButtonProps) => {
  return (
    <Link
      className="border rounded-lg px-4 py-2 bg-black text-white"
      href={href}
    >
      {children}
    </Link>
  )
}

export default function Home() {
  return (
    <div style={{ height: '100vh' }}>
      <Head>
        <title>Quran Foundation Documentation</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl">Quran Foundation</h1>
        <h2 className="text-xl">Browse documentation</h2>
        <div className="flex space-x-4 mt-8">
          {APIs.map((api) => (
            <Button key={api.url} href={api.url}>
              {api.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
