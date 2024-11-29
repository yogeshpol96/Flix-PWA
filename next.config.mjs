// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//     domains: ['148.135.138.27'], // Add allowed domains
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const nextConfig = {
  distDir: 'build',
  // reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  }, 

  images: {
    domains: ['148.135.138.27'],
  },
};

 
export default withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
})(nextConfig);
