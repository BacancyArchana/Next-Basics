/** @type {import('next').NextConfig} */
const nextConfig = {
  compilerOptions: {
    baseUrl: '.',
    paths: {
      '@/components/*': ['components/*'],
      '@/constants/*': ['./constants/*'],
    },
  },
};

module.exports = nextConfig;
