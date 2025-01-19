import { Box, Container } from '@mui/material'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <Container disableGutters  sx={{ width: '60%', display: "flex", alignItems: "center", justifyContent: "space-between" p: 2 }}>

      <Box >
        <Navbar/>
      </Box>
      </Container>
    </>
    
  )
}

export default App
