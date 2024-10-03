/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            // matching all API routes
            source: "/trpc/:path*",
            headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "*" },
              { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
              { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
          }
        ]
      },
      async rewrites() {
        return [
          {
            source: '/trpc/:path*',
            destination: '/api/trpc/:path*',
          },
        ];
      },
images:{
    remotePatterns:[
        {
            // hostname:'localhost',
            // pathname:'**',
            // port:'3000',
            // protocol:'http'
            hostname:'vehicles-web.vercel.app',
            pathname:'**',
            protocol:'https'
        }
    ]
},
typescript:{
    ignoreBuildErrors:true,
},
eslint:{
    ignoreDuringBuilds:true,
},
swcMinify:true,

}

module.exports = nextConfig
