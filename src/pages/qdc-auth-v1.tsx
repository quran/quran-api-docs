import dynamic from 'next/dynamic'
import Head from 'next/head'

const APIDocs = dynamic(() => import('../components/api-docs'), {
  ssr: false,
})

export default function Home() {
  return (
    <div style={{ height: '100vh' }}>
      <Head>
        <title>Quran Foundation Documentation</title>
      </Head>
      <APIDocs
        basePath="/qdc-auth-v1"
        apiDescriptionUrl="/qdc-auth-v1-api.json"
      />
    </div>
  )
}
