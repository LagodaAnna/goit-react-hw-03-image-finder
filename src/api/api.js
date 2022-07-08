import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = 'key=27364094-60e70b419df12f13170509f73';

export const searchPictures = async (searchQuery, page) => {
  const response = await axios.get(
    `?${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
  );

  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  searchPictures,
};
