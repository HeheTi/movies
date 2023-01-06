import { Outlet } from 'react-router-dom';
import Container from 'common/Container';
import { Box } from 'common/Box';
import { NavigateLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Box as="header" p="20px" boxShadow="0 10px 6px -6px #777">
        <nav>
          <NavigateLink to="/">Home</NavigateLink>
          <NavigateLink to="/movies">Movies</NavigateLink>
        </nav>
      </Box>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
