'use client'

export default function imageLoader({ src, width, quality }: { src: string, width: number, quality?: number }) {
  if (src.startsWith('http') || src.startsWith('https')) {
    return src;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // Clean src: ensure leading slash
  const cleanedSrc = src.startsWith('/') ? src : `/${src}`;

  // next-export-optimize-images pattern:
  // /_next/static/chunks/images/{path}/{name}_{width}.{ext}

  const lastDotIndex = cleanedSrc.lastIndexOf('.');
  if (lastDotIndex === -1) return `${basePath}${cleanedSrc}`; // Fallback for files without extension

  const pathAndName = cleanedSrc.substring(0, lastDotIndex);
  const extension = cleanedSrc.substring(lastDotIndex + 1);

  // Return the optimized path
  return `${basePath}/_next/static/chunks/images${pathAndName}_${width}.${extension}`;
}
