'use client'

export default function myImageLoader({ src, width, quality }: { src: string, width: number, quality?: number }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  if (src.startsWith('http') || src.startsWith('https')) {
    return src;
  }

  // Clean basePath: remove trailing slash if present
  const validBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;

  // Check if src already starts with basePath (to avoid duplication)
  // Only check if validBasePath is not empty, otherwise it always matches
  if (validBasePath && src.startsWith(validBasePath)) {
    return src;
  }

  // Clean src: ensure leading slash
  const validSrc = src.startsWith('/') ? src : `/${src}`;

  return `${validBasePath}${validSrc}`;
}
