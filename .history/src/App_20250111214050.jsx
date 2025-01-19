import { Box, Container } from '@mui/material'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <Container sx={{ max }}>

      <Box sx={{ background: "red", width: "100%" }}>
        <Navbar/>
      </Box>
      </Container>
    </>
    
  )
}

export default App
