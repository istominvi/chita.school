import withExportOptimizeImages from 'next-export-optimize-images'

/** @type {import('next').NextConfig} */
let basePath = process.env.BASE_PATH ?? process.env.NEXT_PUBLIC_BASE_PATH;

// If basePath is not defined, we are in GitHub Actions, and we have GITHUB_REPOSITORY
if (basePath === undefined && process.env.GITHUB_ACTIONS && process.env.GITHUB_REPOSITORY) {
  const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
  basePath = `/${repo}`;
}

// Ensure it's not just '/' (GitHub Pages returns '/' for custom domains, but Next.js requires empty string)
if (basePath === '/') {
  basePath = '';
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
  },
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  trailingSlash: true,
}

export default withExportOptimizeImages(nextConfig)
