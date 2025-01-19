import { Box, Container } from '@mui/material'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <Container disableGutters  sx={{ width: 'xs', bgcolor: '#f0f0f0', p: 2 }}>

      <Box >
        <Navbar/>
      </Box>
      </Container>
    </>
    
  )
}

export default App
