import { ThreeDots } from 'react-loader-spinner';
import Box from 'components/Box';

const Loader = () => {
  return (
    <Box mx="auto">
      <ThreeDots height="100" width="100" color="pink" ariaLabel="loading" />
    </Box>
  );
};

export default Loader;
