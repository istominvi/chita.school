'use client'

export default function myImageLoader({ src, width, quality }: { src: string, width: number, quality?: number }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  if (src.startsWith('http') || src.startsWith('https')) {
    return src;
  }

  // next-export-optimize-images naming convention
  const rootPath = '/_next/static/chunks/images';

  // Clean src: remove leading slash
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;

  // Split filename and extension
  const lastDotIndex = cleanSrc.lastIndexOf('.');
  const name = lastDotIndex !== -1 ? cleanSrc.slice(0, lastDotIndex) : cleanSrc;

  // We can use the original extension or webp. next-export-optimize-images generates both.
  // Using webp for better optimization.
  const optimizedSrc = `${rootPath}/${name}_${width}.webp`;

  return `${basePath}${optimizedSrc}`;
}
