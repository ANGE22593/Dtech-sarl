
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { optimizeUnsplashUrl, generateLowQualityUrl, preloadImage } from '@/utils/imageOptimizer';

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: 'square' | '16:9' | '4:3' | '3:4' | '1:1' | 'portrait';
  width?: number;
  height?: number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  className?: string;
  overlayClassName?: string;
  hasOverlay?: boolean;
  priority?: boolean;
  lowQualitySrc?: string;
  optimizeImage?: boolean;
}

const BlurImage: React.FC<BlurImageProps> = ({
  src,
  alt,
  aspectRatio = '16:9',
  width,
  height,
  objectFit = 'cover',
  className,
  overlayClassName,
  hasOverlay = false,
  priority = false,
  lowQualitySrc,
  optimizeImage = true,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState('');
  const [optimizedSrc, setOptimizedSrc] = useState('');
  const [blurSrc, setBlurSrc] = useState('');

  useEffect(() => {
    // Optimize image URLs if needed
    if (optimizeImage && src.includes('unsplash.com')) {
      const optimized = optimizeUnsplashUrl(src, width || 800);
      const blur = lowQualitySrc || generateLowQualityUrl(src, 20);
      setOptimizedSrc(optimized);
      setBlurSrc(blur);
      setCurrentSrc(blur);

      // If priority, preload the full image
      if (priority) {
        preloadImage(optimized);
      }
    } else {
      setOptimizedSrc(src);
      setBlurSrc(lowQualitySrc || src);
      setCurrentSrc(lowQualitySrc || src);
    }
  }, [src, lowQualitySrc, width, optimizeImage, priority]);

  useEffect(() => {
    // Reset loading state when src changes
    setIsLoading(true);
    
    // If we have the blur image ready, use it first
    if (blurSrc) {
      setCurrentSrc(blurSrc);
    }
    
    // Only preload the main image if not priority
    // (priority images are preloaded in the first useEffect)
    if (!priority) {
      const img = new Image();
      img.src = optimizedSrc;
      img.onload = () => {
        setCurrentSrc(optimizedSrc);
        setIsLoading(false);
      };

      return () => {
        img.onload = null;
      };
    } else {
      // For priority images, switch to full image right away
      setCurrentSrc(optimizedSrc);
      setIsLoading(false);
    }
  }, [optimizedSrc, blurSrc, priority]);

  const aspectRatioClasses = {
    'square': 'aspect-square',
    '16:9': 'aspect-video',
    '4:3': 'aspect-4/3',
    '3:4': 'aspect-3/4',
    '1:1': 'aspect-square',
    'portrait': 'aspect-[2/3]',
  };

  return (
    <div className={cn('overflow-hidden relative', aspectRatioClasses[aspectRatio], className)}>
      {/* Placeholder while loading */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      
      <img
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => currentSrc === optimizedSrc && setIsLoading(false)}
        className={cn(
          'w-full h-full transition-opacity duration-500',
          objectFit === 'cover' && 'object-cover',
          objectFit === 'contain' && 'object-contain',
          objectFit === 'fill' && 'object-fill',
          objectFit === 'none' && 'object-none',
          objectFit === 'scale-down' && 'object-scale-down',
          isLoading ? 'opacity-70' : 'opacity-100'
        )}
        fetchPriority={priority ? 'high' : 'auto'}
        {...props}
      />
      
      {/* Optional overlay */}
      {hasOverlay && (
        <div className={cn('absolute inset-0 bg-gradient-to-t from-black/50 to-transparent', overlayClassName)} />
      )}
    </div>
  );
};

export default BlurImage;
