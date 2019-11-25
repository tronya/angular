import ColorThief from 'src/vibrant';

export const getImageColors = async (src: string, count: number = 5) => {
  const colorThief = new ColorThief();
  const img = new Image();
  const googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';

  img.crossOrigin = 'Anonymous';
  img.src = googleProxyURL + encodeURIComponent(src);

  await img.addEventListener('load', () => {
    return colorThief.getPalette(img, count);
  });
};

export const generateImage = (src: string, size: string = 'w500') => {
  return `https://image.tmdb.org/t/p/${size}/${src}`;
};
