import { Box, Container } from '@mui/material'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <Container  sx={{ maxWidth: '600px', bgcolor: '#f0f0f0', p: 4 }}>

      <Box >
        <Navbar/>
      </Box>
      </Container>
    </>
    
  )
}

export default App
