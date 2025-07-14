export const getImagePath = (path: string) => {
  // For GitHub Pages deployment, we need to add the repository name as prefix
  const isProduction = process.env.NODE_ENV === 'production';
  const basePath = isProduction ? '/Earnrly-Landing' : '';
  return `${basePath}${path}`;
};
