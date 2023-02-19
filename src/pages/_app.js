import '../styles/global.css'
import 'highlight.js/styles/a11y-dark.css'
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
