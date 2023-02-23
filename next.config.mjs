// next.config.mjs
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import langJavascript from 'highlight.js/lib/languages/javascript'
import createMDX from '@next/mdx'

const languages = {
  javascript: langJavascript,
}

const aliases = { dockerfile: 'docker' }

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypeHighlight,
        {
          ignoreMissing: true,
          languages,
          aliases,
        },
      ],
    ],
  },
})

// import remarkGfm from 'remark-gfm'
// import createMDX from '@next/mdx'

// const withMDX = createMDX({
//   extension: /\.mdx?$/,
//   options: {
//     // If you use remark-gfm, you'll need to use next.config.mjs
//     // as the package is ESM only
//     // https://github.com/remarkjs/remark-gfm#install
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [],
//     // If you use `MDXProvider`, uncomment the following line.
//     providerImportSource: '@mdx-js/react',
//   },
// })

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/quran.com/v4/',
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/auth/v1/:path*',
        destination: '/auth/v1/', // The :path parameter is used here so will not be automatically passed in the query
      },
      {
        source: '/quran.com/v4/:path*',
        destination: '/quran.com/v4/', // The :path parameter is used here so will not be automatically passed in the query
      },
    ]
  },
  // experimental: {
  //   appDir: true,
  // },
}

export default withMDX(nextConfig)
