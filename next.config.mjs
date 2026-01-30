/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || '/chita.school';

const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    loader: 'custom',
    loaderFile: './image-loader.ts',
  },
  // Для GitHub Pages - укажите имя вашего репозитория
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name',
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  trailingSlash: true,
}

export default nextConfig
