/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Для GitHub Pages - укажите имя вашего репозитория
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name',
  trailingSlash: true,
}

export default nextConfig
