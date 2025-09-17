
/**
 * Optimized image loading utilities
 */

// Cache for preloaded images to avoid duplicate loading
const preloadedImages = new Set<string>();

/**
 * Fonction pour ajouter des paramètres d'optimisation aux URLs d'images Unsplash
 * @param url URL de l'image à optimiser
 * @param width Largeur souhaitée
 * @param quality Qualité de l'image (0-100)
 * @returns URL optimisée
 */
export const optimizeUnsplashUrl = (url: string, width = 800, quality = 80): string => {
  if (!url.includes('unsplash.com')) return url;
  
  // Supprime les paramètres existants
  const baseUrl = url.split('?')[0];
  
  // Ajoute les nouveaux paramètres d'optimisation
  return `${baseUrl}?q=${quality}&w=${width}&auto=format&fit=crop`;
};

/**
 * Génère une version basse qualité d'une image pour le chargement progressif
 * @param url URL de l'image originale
 * @param width Largeur réduite
 * @returns URL de l'image en basse qualité
 */
export const generateLowQualityUrl = (url: string, width = 20): string => {
  if (!url.includes('unsplash.com')) return url;
  
  const baseUrl = url.split('?')[0];
  return `${baseUrl}?q=10&w=${width}&blur=10&auto=format`;
};

/**
 * Force le préchargement d'une image
 * @param src URL de l'image à précharger
 * @returns Promise that resolves when the image is loaded
 */
export const preloadImage = (src: string): Promise<void> => {
  if (preloadedImages.has(src)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      preloadedImages.add(src);
      resolve();
    };
    img.onerror = reject;
  });
};

/**
 * Précharge plusieurs images
 * @param urls Liste des URLs à précharger
 * @returns Promise that resolves when all images are loaded
 */
export const preloadImages = (urls: string[]): Promise<void[]> => {
  return Promise.all(urls.map(url => preloadImage(url)));
};

/**
 * Calculate dimensions to fit within a container while maintaining aspect ratio
 * @param originalWidth Original width
 * @param originalHeight Original height
 * @param maxWidth Maximum width constraint
 * @param maxHeight Maximum height constraint
 * @returns New dimensions {width, height}
 */
export const calculateAspectRatioDimensions = (
  originalWidth: number,
  originalHeight: number,
  maxWidth: number,
  maxHeight: number
): { width: number; height: number } => {
  const ratio = Math.min(maxWidth / originalWidth, maxHeight / originalHeight);
  return {
    width: Math.round(originalWidth * ratio),
    height: Math.round(originalHeight * ratio)
  };
};

/**
 * Get image dimensions from a url by loading it
 * @param url Image URL
 * @returns Promise resolving to {width, height}
 */
export const getImageDimensions = (url: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = reject;
    img.src = url;
  });
};
