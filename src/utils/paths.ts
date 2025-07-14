export const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/Earnrly-Landing' : '';
  return `${basePath}${path}`;
};
