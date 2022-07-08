import PropTypes from 'prop-types';
import { Header, SearchForm, Button, Input } from './Searchbar.styled';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <SearchForm onSubmit={onSubmit}>
        <Button type="submit" aria-label="search">
          <SearchIcon width="20" height="20" fill="grey" />
        </Button>

        <Input
          name="name"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
