import PropTypes from 'prop-types';
import { Header, SearchForm, Button, Input } from './Searchbar.styled';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import { Component } from 'react';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleChange = evt => {
    this.setState({ query: evt.target.value });
  };

  handleSubmit = evt => {
    const { query } = this.state;
    const { onSubmit } = this.props;

    evt.preventDefault();
    onSubmit(query);
  };

  render() {
    const { query } = this.state;

    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <Button type="submit" aria-label="search">
            <SearchIcon width="20" height="20" fill="grey" />
          </Button>

          <Input
            name="name"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

export default Searchbar;
