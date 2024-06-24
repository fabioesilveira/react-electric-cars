import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { logo } from '../data';
import { NavLink } from 'react-router-dom';



function NavBar() {
    return (
      <>
        <Navbar  data-bs-theme="light">
          <Container>
            <img src={logo} alt="Bootstrap" width="65" height="50"></img>
            <Navbar.Brand href="#home">GoEletric</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link as={NavLink} to="/tesla">TESLA</Nav.Link>
              <Nav.Link href="#pricing">LUCID</Nav.Link>
              <Nav.Link href="#pricing">RIVIAN</Nav.Link>
              <Nav.Link href="#pricing">LUXURY CARS</Nav.Link>
              <Nav.Link href="#pricing">ECONOMY CARS</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default NavBar;