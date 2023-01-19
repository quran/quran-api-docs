import dynamic from 'next/dynamic'
import Head from 'next/head'

const AIPDocs = dynamic(() => import('../components/api-docs'), {
  ssr: false,
})

export default function Home() {
  return (
    <div style={{ height: '100vh' }}>
      <Head>
        <title>Quran Foundation Documentation</title>
      </Head>
      <AIPDocs
        basePath="/qdc-auth-v1"
        apiDescriptionUrl="/qdc-open-api.json "
      />
    </div>
  )
}
