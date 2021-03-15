import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'

function App(){

  return(
    <>{/*React Fragment*/}
        <Navbar bg="primary">
          <Navbar.Brand href="#inicio">FateClima</Navbar.Brand>
          <Nav className="mr-auto">
             <Nav.Link href="#inicio">Início</Nav.Link>
            <Nav.Link href="#contao">Contato</Nav.Link>
          </Nav>
       </Navbar>
       <Jumbotron>
         <h1>FateClima</h1>
         <p>
           Consulte o clima de qualquer cidade do mundo. <br></br>
           App desenvolvido em ReactJS e integrado com API OpenWeatherMap.
         </p>
       </Jumbotron>
    </>
  )
}

export default App;