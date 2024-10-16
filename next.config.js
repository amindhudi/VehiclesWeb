
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,  // Enable source maps in production
    
images:{
    remotePatterns:[
        {
            // hostname:'localhost',
            // pathname:'**',
            // port:'3000',
            // protocol:'http'
            hostname:'vehiclesweb-production.up.railway.app',
            pathname:'**',
            port:'3000',
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


