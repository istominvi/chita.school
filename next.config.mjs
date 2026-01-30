/** @type {import('next').NextConfig} */
let basePath = process.env.BASE_PATH;

// If BASE_PATH is not defined, we are in GitHub Actions, and we have GITHUB_REPOSITORY
if (!basePath && process.env.GITHUB_ACTIONS && process.env.GITHUB_REPOSITORY) {
  const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
  basePath = `/${repo}`;
}

// Default to empty string if still not set (e.g. local dev or Vercel)
basePath = basePath || '';

const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    loader: 'custom',
    loaderFile: './image-loader.ts',
    unoptimized: true,
  },
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  trailingSlash: true,
}

export default nextConfig
