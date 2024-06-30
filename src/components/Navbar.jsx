import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { logo } from '../data';
import { NavLink } from 'react-router-dom';



function NavBar() {
    return (
      <>
        <Navbar className="navbar" data-bs-theme="light">
          <Container>
            <img src={logo} alt="Bootstrap" width="65" height="50"></img>
            <Navbar.Brand as={NavLink} to="/">GoEletric</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">HOME</Nav.Link>
              <Nav.Link as={NavLink} to="/tesla">TESLA</Nav.Link>
              <Nav.Link as={NavLink} to="/lucid">LUCID</Nav.Link>
              <Nav.Link href="#pricing">RIVIAN</Nav.Link>
              <Nav.Link href="#pricing">LUXURY CARS</Nav.Link>
              <Nav.Link href="#pricing">ECONOMY CARS</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Card className="text-center">
        <Card.Header></Card.Header></Card>
      </>
    );
  }
  
  export default NavBar;