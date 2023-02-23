import dynamic from 'next/dynamic'
import Head from 'next/head'

const APIDocs = dynamic(() => import('../../components/api-docs'), {
  ssr: false,
})

export default function Home() {
  return (
    <div style={{ height: '100vh' }}>
      <Head>
        <title>Quran Foundation Auth V1 APIs</title>
      </Head>
      <APIDocs
        basePath="/auth/v1"
        apiDescriptionUrl="/auth/v1.json"
      />
    </div>
  )
}
