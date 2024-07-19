import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logo } from '../data/data';
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
            <Nav.Link as={NavLink} to="/rivian"> RIVIAN</Nav.Link>
            <Nav.Link as={NavLink} to="/luxurycars">LUXURY CARS</Nav.Link>
            <Nav.Link href="#pricing">ECONOMY CARS</Nav.Link>
          </Nav>
          

          <NavDropdown title="MyAccount" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Register</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Signin
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Signout
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">
              Contact us
            </NavDropdown.Item>
          </NavDropdown>

        </Container>
      </Navbar>

      <Card className="text-center">
        <Card.Header></Card.Header></Card>
    </>
  );
}

export default NavBar;