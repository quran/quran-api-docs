import dynamic from 'next/dynamic'
import Head from 'next/head'

const APIDocs = dynamic(() => import('../../components/api-docs'), {
  ssr: false,
})

export default function Home() {
  return (
    <div style={{ height: '100vh' }}>
      <Head>
        <title>Quran Foundation Documentation</title>
      </Head>
      <APIDocs basePath="/quranreflect/v1" apiDescriptionUrl="/quranreflect/v1.json" />
    </div>
  )
}
