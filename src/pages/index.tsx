import { Inter } from '@next/font/google'
import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() => import('../components/api-docs'), {
  ssr: false,
  loading: () => <span>loading...</span>,
})

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{ height: '100vh' }}>
      <DynamicHeader />
    </div>
  )
}
