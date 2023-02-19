import '../styles/global.css'
import '../styles/prism.css'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '../components/MDXComponents'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}
