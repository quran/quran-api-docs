import dynamic from 'next/dynamic'
import Head from 'next/head'

const AIPDocs = dynamic(() => import('../../components/api-docs'), {
  ssr: false,
})

export default function Home() {
  return (
    <div style={{ height: '100vh' }}>
      <Head>
        <title>Quran.com V4 APIs</title>
      </Head>
      <AIPDocs basePath="/quran.com/v4" apiDescriptionUrl="/quran.com/v4.json" />
    </div>
  )
}
