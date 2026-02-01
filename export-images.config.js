/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  basePath: (process.env.NEXT_PUBLIC_BASE_PATH === '/' ? '' : process.env.NEXT_PUBLIC_BASE_PATH) ?? '',
  imageDir: '_next/static/chunks/images',
  outDir: 'out',
}

module.exports = config
