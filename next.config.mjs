// next.config.mjs
import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
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
        destination: '/qdc-v4/',
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/qdc-auth-v1/:path*',
        destination: '/qdc-auth-v1/', // The :path parameter is used here so will not be automatically passed in the query
      },
      {
        source: '/qdc-v4/:path*',
        destination: '/qdc-v4/', // The :path parameter is used here so will not be automatically passed in the query
      },
      {
        source: '/qdc-oauth2/:path*',
        destination: '/qdc-oauth2/', // The :path parameter is used here so will not be automatically passed in the query
      },
    ]
  },
  // experimental: {
  //   appDir: true,
  // },
}

export default withMDX(nextConfig)
