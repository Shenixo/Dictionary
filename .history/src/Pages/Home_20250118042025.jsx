import { Box, Container } from "@mui/material";
import Navbar from "../Components/Navbar/Navbar";
import SearchBar from "../Components/SearchBar";
import Body from "../Components/Body/Body";

const Home = () => {
  return (
    <Container
      disableGutters
      sx={{
        width: {
          xs: "100%", // 100% width for smaller screens
          md: "80%",  // 80% width for screens 900px and up (md breakpoint)
        },
        p: 2,
      }}
    >
      <Box>
        <Navbar />
        <SearchBar />
        <Body />
      </Box>
    </Container>
  );
};

export default Home;
