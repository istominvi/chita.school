/** @type {import('next').NextConfig} */
let basePath = process.env.BASE_PATH || process.env.NEXT_PUBLIC_BASE_PATH;

if (!basePath && process.env.GITHUB_ACTIONS && process.env.GITHUB_REPOSITORY) {
  const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
  basePath = `/${repo}`;
}

basePath = basePath || '';

const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    loader: 'custom',
    loaderFile: './lib/image-loader.ts',
  },
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  trailingSlash: true,
}

module.exports = nextConfig
