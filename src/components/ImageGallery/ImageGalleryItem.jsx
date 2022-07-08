import PropTypes from 'prop-types';
import { ImageContainer, Image } from './ImageGallery.styled';

const ImageGalleryItem = ({ tags, webformatURL, largeImageURL, onClick }) => {
  return (
    <ImageContainer
      onClick={() => {
        onClick(largeImageURL);
      }}
    >
      <Image src={webformatURL} alt={tags} />
    </ImageContainer>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
