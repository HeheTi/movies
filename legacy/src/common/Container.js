import { Box } from './Box';

const Container = ({ children }) => {
  return (
    <Box p="32px 16px" mr="auto" ml="auto" max-width="1200px">
      {children}
    </Box>
  );
};

export default Container;
