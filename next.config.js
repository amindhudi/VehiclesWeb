/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

}

module.exports = nextConfig
