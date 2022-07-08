import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import { Container } from './ImageGallery.styled';

const ImageGallery = ({ pictures, onClick }) => {
  return (
    <Container>
      {pictures.map(({ tags, webformatURL, largeImageURL }, index) => {
        return (
          <ImageGalleryItem
            key={index}
            tags={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onClick={onClick}
          />
        );
      })}
    </Container>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};
