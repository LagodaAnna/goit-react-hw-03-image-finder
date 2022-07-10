export const mapper = images => {
  return images.map(({ tags, webformatURL, largeImageURL }) => ({
    tags,
    webformatURL,
    largeImageURL,
  }));
};
