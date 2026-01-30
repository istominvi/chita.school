'use client'

export default function myImageLoader({ src, width, quality }: { src: string, width: number, quality?: number }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  if (src.startsWith('http') || src.startsWith('https')) {
    return src;
  }

  if (basePath && src.startsWith(basePath)) {
    return src;
  }

  // Ensure we don't duplicate slashes
  const cleanSrc = src.startsWith('/') ? src : `/${src}`;
  const cleanBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;

  return `${cleanBasePath}${cleanSrc}`;
}
