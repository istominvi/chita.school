/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || '';

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
  basePath: '/chita.school',
  trailingSlash: true,
}

export default nextConfig
