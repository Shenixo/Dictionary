import { Box, Container } from '@mui/material'
import Navbar from '../Components/Navbar/Navbar'
const Home = () => {
  return (
    <Container disableGutters  sx={{ width: '60%',  p: 2 }}>

    <Box >
      <Navbar/>
    </Box>
    </Container>
  )
}

export default Home
