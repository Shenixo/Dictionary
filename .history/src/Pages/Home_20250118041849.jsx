import { Box, Container } from "@mui/material";
import Navbar from "../Components/Navbar/Navbar";
import SearchBar from "../Components/SearchBar";
import Body from "../Components/Body/Body";

const Home = () => {
  return (
    <Container disableGutters sx={{ width: { xs: '100%', sm: '80%' }, p: 2 }}>
      <Box>
        <Navbar />
        <SearchBar />
        <Body />
      </Box>
    </Container>
  );
};

export default Home;
