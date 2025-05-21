/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Next 13.4+ way to enable `next export`
  // If you’re deploying to a project page (e.g. yourname.github.io/repo-name):
  basePath: '/audio-brief-daily',
  assetPrefix: '/audio-brief-daily/',
};
module.exports = nextConfig;
