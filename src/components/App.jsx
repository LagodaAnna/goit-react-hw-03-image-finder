import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';
import api from '../api';
import Box from './Box';
import { mapper } from 'services/mapper';

class App extends Component {
  state = {
    page: 0,
    pictures: [],
    query: '',
    isLoading: false,
    largeImageURL: null,
    error: null,
  };

  async componentDidUpdate(_, prevState) {
    const currentQuery = this.state.query;
    const prevQuery = prevState.query;
    const currentPage = this.state.page;
    const prevPage = prevState.page;
    const prevPictures = prevState.pictures;
    const currentPictures = this.state.pictures;

    if (prevQuery !== currentQuery || currentPage > prevPage) {
      this.setState({
        isLoading: true,
      });

      try {
        const { hits } = await api.searchPictures(currentQuery, currentPage);
        const upDatePictures = mapper(hits);

        this.setState(prev => ({
          pictures: prev.pictures
            ? [...prev.pictures, ...upDatePictures]
            : upDatePictures,
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }

    if (prevPictures !== currentPictures) {
      window.scrollBy({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handlerSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.elements.name.value;
    const prevQuery = this.state.query;
    if (prevQuery === query || query.trim() === '') {
      return;
    }

    this.setState({
      page: 1,
      pictures: [],
      query,
    });
  };

  handlerOpenModal = largeImageURL => {
    this.setState({ largeImageURL });
  };

  handlerCloseModal = () => {
    this.setState({ largeImageURL: null });
  };

  handleLoadButton = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { pictures, isLoading, largeImageURL, error } = this.state;
    return (
      <>
        <Box
          as="main"
          display="grid"
          gridTemplateColumns="1fr"
          gridGap="16px"
          pb="24px"
        >
          <Searchbar onSubmit={this.handlerSubmit} />
          {error && (
            <Box as="p" mx="auto" fontWeight="600" fontStyle="italic">
              Whoops, something went wrong, please refresh the page
            </Box>
          )}
          {pictures.length !== 0 && (
            <ImageGallery pictures={pictures} onClick={this.handlerOpenModal} />
          )}
          {isLoading && <Loader />}

          {pictures.length !== 0 && <Button onClick={this.handleLoadButton} />}
        </Box>
        {largeImageURL && (
          <Modal onClose={this.handlerCloseModal}>
            <img src={largeImageURL} alt="Big version" />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
