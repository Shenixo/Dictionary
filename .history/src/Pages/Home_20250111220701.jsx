import { Box, Container } from '@mui/material'
import Navbar from '../Components/Navbar/Navbar'
import SearchBar from '../Components/SearchBar'
const Home = () => {
  return (
    <Container disableGutters  sx={{ width: '60%',  p: 2 }}>

    <Box >
              <Navbar />
              <SearchBar/>
    </Box>
    </Container>
  )
}

export default Home
