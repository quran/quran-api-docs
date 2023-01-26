/** @type {import('next').NextConfig} */
const nextConfig = {
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
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
