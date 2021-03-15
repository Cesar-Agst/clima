import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'

function App(){

  return(
    <>{/*React Fragment*/}
        <Navbar bg="primary">
          <Navbar.Brand href="#inicio">FateClima</Navbar.Brand>
          <Nav classname="mr-auto">
          <Nav.link href="#inicio">Início</Nav.link>
          <Nav.link href="#contao">Contato</Nav.link>
          </Nav>
       </Navbar>
    </>
  )
}

export default App;